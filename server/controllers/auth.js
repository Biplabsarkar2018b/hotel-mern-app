// import mongoose from "mongoose";
import Hotel from "../schemas/hotelschema.js";
import User from "../schemas/userschema.js";

export const register = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, phone, password, city, state, pincode } = req.body;
    const existingEmail = await User.findOne({ email: email });
    const existingPhone = await User.findOne({ phone: phone });
    if (existingEmail) {
      return res.status(303).json({ message: "Email already exists" });
    }
    if (existingPhone) {
      return res.status(304).json({ message: "Phone already exists" });
    }
    // console.log(name, email, phone);
    const newUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: password,
      city: city,
      state: state,
      pincode: pincode,
    });
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  } else if (req.method === "GET") {
    return res.status(200).json({ msg: "This is not a POST request" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const u = await User.findOne({ email: email });
  // console.log(email,password);
  if (!u) {
    return res.status(400).json({ error: "User do not exist" });
  }
  if (u.password === password) {
    return res.status(200).json(u);
  } else {
    return res.status(400).json({ error: "Password do not match" });
  }
};

export const hotelLogin = async (req, res) => {
  const { email, password } = req.body;
  const u = await Hotel.findOne({ owneremail: email });
  // console.log(email,password);
  if (!u) {
    return res.status(400).json({ error: "Hotel do not exist" });
  }
  if (u.password === password) {
    return res.status(200).json(u);
  } else {
    return res.status(400).json({ error: "Password do not match" });
  }
};

export const hotelRegister = async (req, res) => {
  const {
    ownerName,
    ownerEmail,
    ownerPhone,
    password,
    hotelName,
    hotelCity,
    hotelStreetName,
    hotelState,
    hotelPincode,
    hotelWebsiteUrl,
    hotelPhoneNumber,
    hotelEmailAddr,
    roomTypes,
  } = req.body;
  const existingHotelEmail = await Hotel.findOne({ hotelemail: hotelEmailAddr });
  const existingOwnerEmail = await Hotel.findOne({ owneremail: ownerEmail });
  const existingHotelPhone = await Hotel.findOne({ hotelphone: hotelPhoneNumber });
  const existingOwnerPhone = await Hotel.findOne({ ownerphone: ownerPhone });
  if (existingHotelEmail) {
    return res.status(303).json({ message: "Hotel Email already exists" });
  }
  if (existingOwnerEmail) {
    return res.status(304).json({ message: "Owner Email already exists" });
  }
  if (existingHotelPhone) {
    return res.status(303).json({ message: "Hotel Phone already exists" });
  }
  if (existingOwnerPhone) {
    return res.status(304).json({ message: "Owner Phone already exists" });
  }

  const newHotel = new Hotel({
    ownername:ownerName,
    owneremail:ownerEmail,
    ownerphone:ownerPhone,
    password:password,
    hotelname:hotelName,
    hotelcity:hotelCity,
    hotelstreet:hotelStreetName,
    hotelstate:hotelState,
    hotelpincode:hotelPincode,
    hotelwebsite:hotelWebsiteUrl,
    hotelphone:hotelPhoneNumber,
    hotelemail:hotelEmailAddr,
  });
  const savedUser = await newHotel.save().catch((error) => {
    return res.status(304).json(error.message);
  });
  return res.status(200).json(savedUser);
};
