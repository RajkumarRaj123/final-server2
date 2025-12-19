import Review from "../models/reviewModel.js";
import Gig from "../models/gigModel.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller) {
    return res.status(403).send("Sellers can't create a review!");
  }
  const newReview = new Review({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const review = await Review.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });
    if (review) {
      return res
        .status(403)
        .send("You have already created a review for this gig");
    }
    const savedReview = await newReview.save();
    await Gig.findByIdAndUpdate(req.body.gigId, {
      $inc: { totalStars: req.body.star, starNumber: 1 },
    });
    res.status(201).send(savedReview);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ gigId: req.params.gigId });
    res.status(200).send(reviews);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const deleteReview = async (req, res) => {
  try {
  } catch (err) {
    next(err);
  }
};
