const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const connection = require('../../../db/db')

const stripePayment = async (req, res) => {
  const { amount, id, campaign_id, userId } = req.body;
//   const created_at = Date.now();
  try {
    const payment = await stripe.paymentIntents.create({
      amount:amount,
      currency: "USD",
      description: "Fundraiser",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment.status);

    if (payment.status == "succeeded") {
      // post 3ala contribution table ( insert new contribution [ userid, postid, amount ])
      const queryString = `INSERT INTO  contributions (userId , campaign_id, amount  ) VALUES (?,?,?)`;
      const data = [userId , campaign_id, amount ];
      connection.query(queryString, data, (err, result) => {
          
        if (result) {
            const query = `SELECT current_target FROM campaigns WHERE id=${campaign_id}`;
            connection.query(query, (err, result1)=>{
                let updatedAmount = result1[0].current_target+amount/100
                const query = `UPDATE campaigns SET current_target = ${updatedAmount}  WHERE id = ${campaign_id}`;
                connection.query(query, (err, response) => {
                    if (err) {
                        res.status(500);
                        res.json(err);
                    }
                    if (response) {
                        const success = {
                            success: true,
                            message: "success amount post to is updated and payment successfully",
                            result:response
                        }
                        res.json(success);
                        res.status(200);
                    }
                })
                
            })


        //     res.json({
        //     message: "Payment successful",
        //     success: true,
        //     result: result,
        //     //date:
        //   });
        }
        if (err) {
          console.log("Error", err);
          res.json({
            message: "Payment failed",
            success: false,
          });
        }
      }); // update/put 3ala 2l post ( via its id) current_target = amount + current_target

      // notification checker  target == current_target
    }

    // if(res.json.message=="Payment successful"){
    //     console.log("batata")
    // }
    /**
         if (currentTarget == target){
             we invoke postInformationSender function
         }
         function postInformationSender(postId,target){return postId,target}
         
         */
  } catch (error) {
    console.log("Error", error);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};
module.exports = { stripePayment };
// module.exports = {postInformationSender}
