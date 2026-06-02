import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;
const { Schema, model } = mongoose;
// import model from "./model.js"

const pending = new Schema({
  from: {
    type: ObjectId
  },
  to: {
    type: Object,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

export default await model("Snet_Pending", pending)