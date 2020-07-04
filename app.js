import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import CSVtoJSON from "csvtojson";
import Profile from "./models/profile";
import config from "./config";

//Connect to database
const uri = config.uri;

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

//Play around with csv file
let fileLocation = "./user.csv";
CSVtoJSON()
  .fromFile(fileLocation)
  .then((users) => {
    users.map((user) => {
      var newUser = { ...user, address: [user.address, user.company_name] };
      console.log(newUser);
    });
  });

// CSVtoJSON()
//   .fromFile("user.csv")
//   .then((users) => {
//     Profile.create(users);
//     console.log(`${this.users} has been added to the database`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
