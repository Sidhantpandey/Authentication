import { asyncHandler } from "../utils/asyncHandler.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt.js";
import jwt from "jsonwebtoken";


const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.json({ success: false, message: "Missing Details" });
  }

  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "User Already Exists" });
    }
    // if user with the email id dont exists then we encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creating new user for the database
    // remember we will provide name and other details not default values
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();

    // now generate tokens which we will send it to the user using the cookies
    // we will provide token id, secretkey, expiry time
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // we will send token via cookie, 1st ->name ,2nd->value
    res.cookie("token", token, {
      httpOnly: true,
      // if nodeenv=production then its true otherwise return false
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV == "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 1000,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

export { register };
