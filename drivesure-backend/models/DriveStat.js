const mongoose = require("mongoose");

const driveStatSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },

    // Input data sent to the ML model
    tripData: {
      avg_speed: { type: Number, required: true },
      max_speed: { type: Number, required: true },
      overspeed_ratio: { type: Number, required: true },
      harsh_brake_count: { type: Number, required: true },
      sharp_turn_count: { type: Number, required: true },
      night_ratio: { type: Number, required: true },
      trip_distance_km: { type: Number, required: true },
      trip_duration_min: { type: Number, required: true },
    },

    // Response from the ML model
    riskAnalysis: {
      trip_id: mongoose.Schema.Types.Mixed,
      risk_prob: Number,
      safety_score: Number,
      risk_category: String,
      top_factors: [
        {
          feature: String,
          importance: Number,
          value: mongoose.Schema.Types.Mixed,
        },
      ],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("DriveStat", driveStatSchema);
