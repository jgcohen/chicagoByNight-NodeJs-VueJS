import UserModel from "../models/userModel.js";


export const getUser = async (req, res,next) => {
  const user = await UserModel.find({ _id: req.params.id });
  if (!user) {
    res.status(404).send("No user found");
  }
  res.send(user);
};

export const updateUser = async (req, res) => {
  const user = await UserModel.findByIdAndUpdate(req.params.id, req.body);
  if (!user) {
    res.status(404).send("No user found");
  }
  await user.save();
  res.send(user);
};

