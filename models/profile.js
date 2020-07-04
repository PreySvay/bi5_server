import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema(
  {
    sector: {
      type: String,
      default: "",
    },
    subsector: {
      type: String,
      default: "",
    },
    company_name: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
