import Bid from "../models/bidModel.js";

export const createBid = async (req, res, next) => {
  try {
    const newBid = new Bid({
      gigId: req.body.gigId,
      sellerId: req.body.sellerId,
      buyerId: req.userId, // 👈 token la irundhu
      price: req.body.price,
      message: req.body.message,
    });

    await newBid.save();
    res.status(201).send("Bid created successfully");
  } catch (err) {
    console.log("BID ERROR 👉", err);
    res.status(500).send("Something went wrong");
  }
};
