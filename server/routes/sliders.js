const express = require("express");
const Slider = require("../models/Slider");
const upload = require("../middleware/upload");
const isAdmin = require("../middleware/isAdmin");

const router = express.Router();

/* ADD SLIDE (ADMIN ONLY) */
router.post("/", isAdmin, upload.single("image"), async (req, res) => {
  const { order } = req.body;

  const slide = new Slider({
    image: `/uploads/${req.file.filename}`,
    order: order || 0
  });

  await slide.save();
  res.send("Slide added");
});

/* GET SLIDES (PUBLIC) */
router.get("/", async (req, res) => {
  const slides = await Slider.find({ active: true }).sort({ order: 1 });
  res.json(slides);
});

/* DELETE SLIDE (ADMIN ONLY) */
router.delete("/:id", isAdmin, async (req, res) => {
  await Slider.findByIdAndDelete(req.params.id);
  res.send("Slide deleted");
});

module.exports = router;
const adminAuth = require("../middleware/adminAuth");

router.post("/", adminAuth, upload.single("image"), async (req, res) => {
  // add product
});

router.delete("/:id", adminAuth, async (req, res) => {
  // delete product
});
