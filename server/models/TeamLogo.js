const mongoose = require("mongoose");
const TeamLogoSchema = new mongoose.Schema(
  {
    captain: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("TeamLogo", TeamLogoSchema);
