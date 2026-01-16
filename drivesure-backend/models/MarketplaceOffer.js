const mongoose = require("mongoose");

const marketplaceOfferSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    cost: {
      type: Number, // Cost in coins/tokens
      required: true,
      min: 0,
    },
    originalPrice: {
      type: Number, // Optional: if this is a discount, show original value
    },
    category: {
      type: String,
      enum: ["insurance", "service", "accessories", "fuel", "other"],
      default: "other",
    },
    imageUrl: {
      type: String,
      default: "",
    },
    partnerName: {
      type: String, // The company offering the deal
      required: true,
    },
    validUntil: {
      type: Date,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("MarketplaceOffer", marketplaceOfferSchema);
