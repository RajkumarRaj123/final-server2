import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("user has been created");
  } catch (err) {
    console.log(err);
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send("user not found");
    }
    const isCorrect = bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return res.status(400).send("wrong password or username");
    }

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res.status(200).json({ info, token });
  } catch (err) {
    console.log(err);
    next(err);
  }

};
export const logout = async (req, res) => {
  
  res.status(200).send("user has been logged out");
};
