const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./Db/db");
const UploadFile = require("./model/UploadFileModal");

// middleware
app.use(express.json());
app.use(cors());
app.post("/api/upload", async (req, res) => {
  try {
    const { file } = req.body;
    const fileUpload = new UploadFile(file);
    fileUpload.save();
    return res.status(200).json(fileUpload);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ err: "Something went wrong" });
  }
});
// database connection
dbConnection;
// router

const port = 8000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
