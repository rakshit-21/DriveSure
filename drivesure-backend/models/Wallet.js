const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["credit", "debit"], // earned or speedAtIncident
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  relatedId: {
    type: mongoose.Schema.Types.ObjectId,
    // Could link to a Trip ID (earning) or MarketplaceOffer ID (spending)
  },
});

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true,
    },
    balance: {
      type: Number,
      default: 0,
      min: 0,
    },
    currency: {
      type: String,
      default: "DriveCoins", // Or whatever internal currency name
    },
    transactions: [transactionSchema],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Wallet", walletSchema);
