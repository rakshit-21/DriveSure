const express = require("express");
const router = express.Router();
const {
  analyzeTrip,
  getTripHistory,
} = require("../controllers/tripController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/analyze", protect, analyzeTrip);
router.get("/history/:userId", protect, getTripHistory);

module.exports = router;
