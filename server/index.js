import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import { hotelLogin, hotelRegister, login, register } from "./controllers/auth.js";
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));



mongoose
  .connect(
    "mongodb+srv://biplabsarkar2018b:biplab123@cluster0.r8wgbla.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((resionse) => {
    console.log("mongodb connected");
    app.listen(3300,()=>console.log('Server started on 3300'));
  })
  .catch((error) => console.error(error));

app.post("/register/user", register);
app.post("/register/hotel", hotelRegister);
app.post("/login/user", login);
app.post("/login/hotel", hotelLogin);
app.get("/",(req,res)=>{
  res.status(200).json(true);
})
