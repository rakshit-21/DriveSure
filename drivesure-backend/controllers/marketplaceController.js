const MarketplaceOffer = require("../models/MarketplaceOffer");
const Wallet = require("../models/Wallet");

exports.getOffers = async (req, res) => {
  try {
    const offers = await MarketplaceOffer.find({ isActive: true });
    res.json({ success: true, count: offers.length, data: offers });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.createOffer = async (req, res) => {
  try {
    const offer = new MarketplaceOffer(req.body);
    await offer.save();
    res.status(201).json({ success: true, data: offer });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getWallet = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.params.userId });
    if (!wallet)
      return res
        .status(404)
        .json({ success: false, message: "Wallet not found" });
    res.json({ success: true, data: wallet });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.purchaseOffer = async (req, res) => {
  try {
    const { userId, offerId } = req.body;

    const wallet = await Wallet.findOne({ userId });
    const offer = await MarketplaceOffer.findById(offerId);

    if (!wallet || !offer) {
      return res
        .status(404)
        .json({ success: false, message: "Wallet or Offer not found" });
    }

    if (wallet.balance < offer.cost) {
      return res
        .status(400)
        .json({ success: false, message: "Insufficient balance" });
    }

    // Deduct balance
    wallet.balance -= offer.cost;
    wallet.transactions.push({
      type: "debit",
      amount: offer.cost,
      description: `Purchased: ${offer.title}`,
      relatedId: offer._id,
    });
    await wallet.save();

    res.json({
      success: true,
      message: "Purchase successful",
      newBalance: wallet.balance,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
