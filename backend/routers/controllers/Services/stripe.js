const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const connection = require("../../../db/db");
const socket = require("socket.io");
const io = require("../../../server");
const sgMail = require("@sendgrid/mail");

const stripePayment = async (req, res) => {
  const sgMailApiKey =
    "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";
  const { amount, id, campaign_id, userId, created_at, title } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Fundraiser",
      payment_method: id,
      confirm: true,
    });
    if (payment.status == "succeeded") {
      const queryString = `INSERT INTO  contributions (userId , campaign_id, amount, created_at, title  ) VALUES (?,?,?,?,?)`;
      const data = [userId, campaign_id, amount, created_at, title];
      connection.query(queryString, data, (err, result) => {
        if (result) {
          const query = `SELECT * FROM users JOIN campaigns  ON users.id=campaigns.userId WHERE campaigns.id = ${campaign_id}`;
          connection.query(query, (err, result1) => {
            let updatedAmount = result1[0].current_target + amount / 100;
            const query = `UPDATE campaigns SET current_target = ${updatedAmount}  WHERE id = ${campaign_id}`;
            connection.query(query, (err, response) => {
              if (err) {
                res.status(500);
                res.json(err);
              }
              if (response) {
                const success = {
                  success: true,
                  message:
                    "success amount post to is updated and payment successfully",
                  result: response,
                };
                res.json(success);
                res.status(200);
              }
              if (result1[0].current_target >= result1[0].targett) {
                sgMail.setApiKey(sgMailApiKey);
                let email = result1[0].email;
                const msg = {
                  to: email, // Change to your recipient
                  from: "obada.amarneh20@gmail.com", // Change to your verified sender
                  subject: "Sending with SendGrid is Fun",
                  text: ` your post ${result1[0].title} has achieved the target   ${result1[0].targett}`,
                  html: `<strong> <hr><hr/> <h1> your post ${result1[0].title} has achieved the target   ${result1[0].targett} </h1> <hr><hr/> `,
                };
                sgMail
                  .send(msg)
                  .then(() => {})
                  .catch((error) => {});
                const io = req.app.get("socketio"); // importing the socket instance
                io.emit("notificationtarget", {
                  text: `Congratulations, your ${result1[0].title} has reached its target!`,
                  owner: result1[0].userId,
                });
              }
            });
          });
        }
        if (err) {
          res.json({
            message: "Payment failed",
            success: false,
          });
        }
      });
    }
  } catch (error) {
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};
module.exports = { stripePayment };
// module.exports = {postInformationSender}
