const express = require("express");
const GoldRate = require("../models/GoldRate");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

/* UPDATE GOLD RATE (ADMIN ONLY) */
router.post("/", isAdmin, async (req, res) => {
  const { ratePerGram } = req.body;

  let rate = await GoldRate.findOne();
  if (rate) {
    rate.ratePerGram = ratePerGram;
    await rate.save();
  } else {
    rate = new GoldRate({ ratePerGram });
    await rate.save();
  }

  res.send("Gold rate updated");
});

/* GET GOLD RATE (PUBLIC) */
router.get("/", async (req, res) => {
  const rate = await GoldRate.findOne();
  if (!rate) return res.json({ ratePerGram: 0, rate8g: 0 });

  res.json({
    ratePerGram: rate.ratePerGram,
    rate8g: rate.ratePerGram * 8
  });
});

module.exports = router;
const adminAuth = require("../middleware/adminAuth");

router.post("/", adminAuth, upload.single("image"), async (req, res) => {
  // add product
});

router.delete("/:id", adminAuth, async (req, res) => {
  // delete product
});
