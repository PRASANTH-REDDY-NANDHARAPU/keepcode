const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const joinSchema = new Schema({
  joinerName: { type: String, required: true },
  joinerEmail: { type: String, required: true },
  joinerNumber: { type: Number, required: true },
  joinerState: { type: String, required: true },
  joinerRefer: { type: String, required: true },
});
module.exports = mongoose.model("Joiners",joinSchema);
