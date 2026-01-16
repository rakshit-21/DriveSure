require("dotenv").config();
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");
const connectDB = require("./config/db");

// Models (Required for WebSocket logic)
const IoTData = require("./models/IoTData");
const DriveStat = require("./models/DriveStat");
const User = require("./models/User");

// Initialize App
const app = express();
const server = http.createServer(app);

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/marketplace", require("./routes/marketplaceRoutes"));
app.use("/api/trips", require("./routes/tripRoutes"));
app.use("/api/claims", require("./routes/claimRoutes"));

// Basic Route
app.get("/", (req, res) => {
  res.send("IoT Backend Server is running");
});

// WebSocket Server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws, req) => {
  console.log("New WebSocket connection established");

  ws.on("message", async (message) => {
    try {
      const parsedMessage = JSON.parse(message);

      // --- Frontend Data Fetch Handler ---
      if (parsedMessage.type === "FETCH_FULL_USER_DATA") {
        const { userId } = parsedMessage;

        if (!userId) {
          ws.send(
            JSON.stringify({ error: "userId is required for fetching data" }),
          );
          return;
        }

        // Fetch User Profile (exclude password)
        const userProfile = await User.findById(userId).select("-password");

        // Fetch Recent Drive Stats (Analysis)
        const driveStats = await DriveStat.find({ userId })
          .sort({ createdAt: -1 })
          .limit(10);

        // Fetch Recent IoT Data Logs
        const recentIoTData = await IoTData.find({ userId })
          .sort({ createdAt: -1 })
          .limit(20);

        ws.send(
          JSON.stringify({
            type: "USER_DATA_UPDATE",
            user: userProfile,
            driveStats: driveStats,
            recentIoTLogs: recentIoTData,
          }),
        );
        return;
      }

      // --- IoT Device Data Ingestion Handler ---
      if (!parsedMessage.userId || !parsedMessage.data) {
        ws.send(
          JSON.stringify({
            error: "Invalid message format. userId and data are required.",
          }),
        );
        return;
      }

      console.log(
        `Received data from User: ${parsedMessage.userId}, Device: ${parsedMessage.deviceId || "Unknown"}`,
      );

      const newData = new IoTData({
        userId: parsedMessage.userId,
        deviceId: parsedMessage.deviceId || "unknown_device",
        timestamp: parsedMessage.timestamp || new Date(),
        data: parsedMessage.data,
      });

      await newData.save();

      ws.send(
        JSON.stringify({
          status: "success",
          message: "Data saved successfully",
          id: newData._id,
        }),
      );
    } catch (error) {
      console.error("Error processing message:", error);
      ws.send(
        JSON.stringify({
          error: "Error processing message",
          details: error.message,
        }),
      );
    }
  });

  ws.on("close", () => {
    console.log("WebSocket connection closed");
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
