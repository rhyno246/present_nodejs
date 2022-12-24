require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.set("strictQuery", false);
const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@apiv1.wkkey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
      );
      console.log("mongoose is connected");
    } catch (error) {
      console.log(error.message);
    }
  };
  connectDB();


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended : true
}))

const PORT = process.env.PORT || 8000;

app.listen(PORT , () => {
    console.log(`server is running port ${PORT}`);
})

