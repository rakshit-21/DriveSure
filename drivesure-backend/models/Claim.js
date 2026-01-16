const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    // Incident Details
    incidentType: {
      type: String,
      enum: ["Accident", "Theft", "Weather", "Other"],
      required: true,
    },
    incidentDate: {
      type: Date,
      required: true,
    },
    incidentTime: {
      type: String, // e.g., "02:30 PM"
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    evidencePhotos: [
      {
        type: String, // URLs to the stored images
      },
    ],

    // Telematics Hub Data (Verified from IoT device)
    telematicsData: {
      location: {
        latitude: Number,
        longitude: Number,
        address: String,
      },
      impactGForce: {
        value: Number,
        verified: { type: Boolean, default: false },
      },
      speedAtIncident: {
        value: Number, // e.g., in mph or km/h
        verified: { type: Boolean, default: false },
      },
      vehicleHealth: {
        airbagDeployed: { type: Boolean, default: false },
        engineCode: String,
        verified: { type: Boolean, default: false },
      },
    },

    // Claim Status
    status: {
      type: String,
      enum: ["Draft", "Submitted", "Under Review", "Approved", "Rejected"],
      default: "Submitted",
    },
    verificationProgress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    aiRiskAssessment: {
      // Placeholder for AI Agent output shown in button ("Submit to AI Agent")
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Claim", claimSchema);
