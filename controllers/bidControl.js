import bidModel from "../models/bidModel.js";

export const createBid = async (req, res) => {
  if (req.isSeller) {
    return res.status(403).send("Sellers cannot place bids");
  }

  const newBid = new bidModel({
    gigId: req.body.gigId,
    buyerId: req.user._id,
    sellerId: req.body.sellerId,
    price: req.body.price,
    message: req.body.message,
  });

  try {
    const savedBid = await newBid.save();
    res.status(201).json(savedBid);
  } catch (err) {
    res.status(500).send("Failed to create bid");
  }
};
