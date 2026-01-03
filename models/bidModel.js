import mongoose from "mongoose";

const BidSchema = new mongoose.Schema(
  {
    gigId: {
      type: String,
      required: true,
    },
    buyerId: {
      type: String,
      required: true,
    },
    sellerId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bid", BidSchema);
