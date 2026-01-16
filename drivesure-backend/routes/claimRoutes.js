const express = require("express");
const router = express.Router();
const {
  submitClaim,
  getUserClaims,
} = require("../controllers/claimController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, submitClaim);
router.get("/:userId", protect, getUserClaims);

module.exports = router;
