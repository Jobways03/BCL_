const mongoose = require("mongoose");
const TeamMemberSchema = new mongoose.Schema(
  {
    captain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: { type: String, required: true },
    jerseyNumber: { type: String, required: true },
    tshirtSize: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL", "XXXL"],
      required: true,
    },
    trackSize: {
      type: String,
      enum: ["S", "M", "L", "XL", "XXL", "XXXL"],
      required: true,
    },
    sleeveType: { type: String, enum: ["half", "full"], required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("TeamMember", TeamMemberSchema);
