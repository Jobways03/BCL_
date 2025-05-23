const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const header = req.header("Authorization") || "";
  const token = header.startsWith("Bearer ") && header.split(" ")[1];
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
