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
        console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true,
            amount:amount,
            //date:
		})
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