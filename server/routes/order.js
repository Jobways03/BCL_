const express = require("express");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // 1) fetch the full user
    const user = await User.findById(req.user.id).lean();
    if (!user) return res.status(404).json({ msg: "User not found" });

    const { name, teamName, phone } = user;
    const { players = [], teamLogos = [] } = req.body;

    // 2) build logos HTML (if any)
    let logosHtml = "";
    if (teamLogos.length) {
      logosHtml =
        "<h3>Team Logos</h3>" +
        teamLogos
          .map(
            (url) =>
              `<img src="${url}" style="height:80px;margin:5px; object-fit:contain;" />`
          )
          .join("");
    }

    // 3) build players table rows
    const rows = players
      .map(
        (p) => `
      <tr>
        <td>${p.name}</td>
        <td>${p.jerseyNumber}</td>
        <td>${p.tshirtSize}</td>
        <td>${p.trackSize}</td>
        <td>${p.sleeveType}</td>
      </tr>`
      )
      .join("");

    // 4) assemble the full HTML
    const html = `
      <h2>Jersey Order Request</h2>

      <h3>Customer Details</h3>
      <ul style="list-style:none; padding:0;">
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Team Name:</strong> ${teamName}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>

      ${logosHtml}

      <h3>Players</h3>
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Jersey</th>
            <th>T-shirt</th>
            <th>Track</th>
            <th>Sleeve</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;

    // 5) send via Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ORDER_EMAIL,
      subject: "Jersey Order Request",
      html,
    });

    res.json({ msg: "Order email sent with customer info, logos & players" });
  } catch (err) {
    console.error("Error sending order email:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
