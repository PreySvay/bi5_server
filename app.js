const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const CSVtoJSON = require("csvtojson");
const Profile = require("./models/profile");

//Connect to database
const uri =
  "mongodb+srv://bi5:bi5eliteteam@bi5project-vjvix.mongodb.net/client?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log(`The server has connected to the database`);
  })
  .catch((err) => {
    console.log(err);
  });

CSVtoJSON()
  .fromFile("user.csv")
  .then((users) => {
    Profile.create(users);
    console.log(`${this.users} has been added to the database`);
  })
  .catch((err) => {
    console.log(err);
  });

//Initialize app
const app = express();

//Apply middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express</h1><p>Express Server</p></body></html");
});

//Listen to port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The app is running on port: ${port}`);
});
