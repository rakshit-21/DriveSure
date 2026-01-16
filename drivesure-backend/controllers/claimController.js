const Claim = require("../models/Claim");
const User = require("../models/User");

exports.submitClaim = async (req, res) => {
  try {
    const {
      userId,
      incidentType,
      incidentDate,
      incidentTime,
      description,
      evidencePhotos,
      telematicsData,
    } = req.body;

    if (!userId || !incidentType || !incidentDate) {
      return res
        .status(400)
        .json({
          error: "Missing required fields: userId, incidentType, incidentDate",
        });
    }

    // Verify user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Create new claim
    const newClaim = new Claim({
      userId,
      incidentType,
      incidentDate,
      incidentTime,
      description,
      evidencePhotos: evidencePhotos || [],
      telematicsData: telematicsData || {},
      status: "Submitted",
      verificationProgress: 10,
    });

    await newClaim.save();

    res.status(201).json({
      success: true,
      message: "Claim submitted successfully",
      claimId: newClaim._id,
      claim: newClaim,
    });
  } catch (error) {
    console.error("Error submitting claim:", error);
    res
      .status(500)
      .json({ error: "Failed to submit claim", details: error.message });
  }
};

exports.getUserClaims = async (req, res) => {
  try {
    const claims = await Claim.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.json({ success: true, count: claims.length, data: claims });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
