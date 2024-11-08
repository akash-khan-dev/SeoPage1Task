const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const fileUploadSchema = new Schema({
  file: {
    type: [String],
    required: true,
  },
});

module.exports = model("UploadFile", fileUploadSchema);
