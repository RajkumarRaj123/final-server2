import User from "../models/userModel.js";

export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString()) {
    return res.status(403).send("you can delete only your account");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted");
};

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const becomeSeller = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json("User not found");
    }

    if (user.isSeller) {
      return res.status(400).json("Already a seller");
    }

    user.isSeller = true;
    user.desc = req.body.desc;

    await user.save();

    res.status(200).json({
      message: "You are now a seller 🎉",
      user,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

