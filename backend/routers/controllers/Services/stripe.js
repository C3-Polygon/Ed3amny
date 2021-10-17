const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const stripePayment = async (req,res)=>{
    const {amount,id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Fundraiser",
            payment_method:id,
            confirm:true
        })
        console.log("Payment", payment.status)
        

        if(payment.status=="succeeded"){
            // post 3ala contribution table ( insert new contribution [ userid, postid, amount ])
       console.log("Hushki loves bataa")

            // update/put 3ala 2l post ( via its id) current_target = amount + current_target


            // notification checker  target == current_target
        }
		res.json({
			message: "Payment successful",
			success: true,
            amount:amount,
            //date:
		})
       
        
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
        console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})        
    }
}
module.exports = {stripePayment}
// module.exports = {postInformationSender}