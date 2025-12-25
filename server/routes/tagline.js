const express = require("express");
const BrandTagline = require("../models/BrandTagline");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

/* SET TAGLINE (ADMIN ONLY) */
router.post("/", isAdmin, async (req, res) => {
  const { taglineEnglish, taglineMalayalam } = req.body;

  // deactivate old taglines
  await BrandTagline.updateMany({}, { active: false });

  const tagline = new BrandTagline({
    taglineEnglish,
    taglineMalayalam,
    active: true
  });

  await tagline.save();
  res.send("Tagline updated");
});

/* GET ACTIVE TAGLINE (PUBLIC) */
router.get("/", async (req, res) => {
  const tagline = await BrandTagline.findOne({ active: true });
  res.json(tagline);
});

module.exports = router;
const adminAuth = require("../middleware/adminAuth");

router.post("/", adminAuth, upload.single("image"), async (req, res) => {
  // add product
});

router.delete("/:id", adminAuth, async (req, res) => {
  // delete product
});
