const mongoose = require("mongoose");

const iotDataSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, index: true },
    deviceId: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, index: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true }, // Flexible data structure for various sensors
  },
  { timestamps: true },
);

module.exports = mongoose.model("IoTData", iotDataSchema);
