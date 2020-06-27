const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const officeSpaceSchema = new Schema(
    {
        company_name: {
            type: String,
            default: "",
            required: true,
        },
        sector: {
            type: String,
            default: "",
        },
        last_name: {
            type: String,
            default: "",
            required: true,
        },
        first_name: {
            type: String,
            default: "",
            required: true,
        },
        position: {
            type: String,
            default: "",
        },
        mobile: {
            //personal number
            type: String,
            default: "",
            required: true,
        },
        tel: {
            //for the company's mobile number
            type: String,
            default: "",
        },
        fax: {
            type: String,
            default: "",
        },
        website: {
            type: String,
            default: "",
        },
        email: {
            type: String,
            default: "",
            required: true,
        },
        house_number: {
            type: String,
            default: "",
        },
        street: {
            type: String,
            default: "",
        },
        songkat: {
            type: String,
            default: "",
        },
        district: {
            type: String,
            default: "",
        },
        city: {
            type: String,
            default: "",
        },   
    },
    {timestamps: true}
);

module.exports = OfficeSpace = mongoose.model("OfficeSpace", officeSpaceSchema);

