const axios = require("axios");
const DriveStat = require("../models/DriveStat");

exports.analyzeTrip = async (req, res) => {
  try {
    const { userId, tripData } = req.body;

    // Validate required fields
    if (!userId || !tripData) {
      return res
        .status(400)
        .json({ error: "userId and tripData are required" });
    }

    // Call external FastAPI ML model
    const mlResponse = await axios.post(
      "https://drivesure-api.onrender.com/api/risk/scoreTrip",
      tripData,
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    const analysisResult = mlResponse.data;

    // Save to MongoDB linked with userId
    const driveStat = new DriveStat({
      userId: userId,
      tripData: tripData,
      riskAnalysis: analysisResult,
    });

    await driveStat.save();

    console.log(`Trip analysis saved for user: ${userId}`);

    // Return the result to the client
    res.json({
      success: true,
      message: "Trip analyzed and saved successfully",
      id: driveStat._id,
      analysis: analysisResult,
    });
  } catch (error) {
    console.error("Error analyzing trip:", error.message);
    if (error.response) {
      console.error("External API Data:", error.response.data);
      console.error("External API Status:", error.response.status);
      return res
        .status(error.response.status)
        .json({ error: "Error from ML Service", details: error.response.data });
    } else if (error.request) {
      return res.status(503).json({ error: "ML Service Unavailable" });
    }
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

exports.getTripHistory = async (req, res) => {
  try {
    const stats = await DriveStat.find({ userId: req.params.userId }).sort({
      createdAt: -1,
    });
    res.json({ success: true, count: stats.length, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
