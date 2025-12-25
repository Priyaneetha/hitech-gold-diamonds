const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "hitechgoldsecret",
  resave: false,
  saveUninitialized: false
}));

/* ===== STATIC FILES FIRST ===== */
app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ===== DATABASE ===== */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

/* ===== API ROUTES ===== */
app.use("/api/admin", require("./routes/admin"));
app.use("/api/products", require("./routes/products"));
app.use("/api/categories", require("./routes/categories"));
app.use("/api/goldrate", require("./routes/goldrate"));
app.use("/api/sliders", require("./routes/sliders"));
app.use("/api/tagline", require("./routes/tagline"));

/* ===== ROOT ===== */
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});


/* ===== SERVER ===== */
const PORT = process.env.PORT || 5000;
app.get("/admin.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public/admin.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
