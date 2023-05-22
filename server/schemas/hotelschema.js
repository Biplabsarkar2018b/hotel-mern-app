import mongoose, { Schema, model } from "mongoose";

const HotelSchema = new Schema(
  {
    accountType:{
      type:String,
      default:'hotel'
    },
    ownername: {
      type: String,
      required: true,
    },
    owneremail: {
      type: String,
      required: true,
      unique: true,
    },
    ownerphone: {
      type: String,
      required: true,
      unique: true,
    },
    password:{
        type:String,
        min:6,
        max:15,
        required:true,
    },
    hotelname: {
        type: String,
        required: true,
      },
      hotelcity: {
        type: String,
        required: true,
      },
      hotelstreet: {
        type: String,
        required: true,
      },
      hotelstate:{
        type:String,
        required:true,
      },
      hotelpincode:{
        type:String,
        required:true,
      },
      hotelwebsite:{
        type:String,
      },
      hotelphone:{
        type:String,
        required:true,
      },
      hotelemail:{
        type:String,
        required:true,
      },
      roomtype:{
        type:Array,
        default:['basic'],
      },
  },
  {
    timestamps: true,
  }
);

const Hotel = model.Hotel || model('Hotel',HotelSchema);
export default Hotel;
