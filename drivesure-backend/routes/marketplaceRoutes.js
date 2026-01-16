const express = require("express");
const router = express.Router();
const {
  getOffers,
  createOffer,
  getWallet,
  purchaseOffer,
} = require("../controllers/marketplaceController");
const { protect } = require("../middlewares/authMiddleware");

router.get("/offers", getOffers);
router.post("/offers", protect, createOffer); // In real app, restrict to Admin
router.get("/wallet/:userId", protect, getWallet);
router.post("/purchase", protect, purchaseOffer);

module.exports = router;
