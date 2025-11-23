import mongoose from "mongoose";
const PaymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderId: String,
  paymentId: String,
  amount: Number,
  status: String
}, { timestamps: true });

const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
