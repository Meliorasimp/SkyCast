import express from "express";
import dotenv from "dotenv";
import forecastRouter from "./routes/forecastRoute.js";
import airqualityRouter from "./routes/airqualityRoute.js";
import moonPhaseRouter from "./routes/moonPhaseRoute.js";
import marineWeatherRouter from "./routes/marineWeatherRoute.js";
import exploreRouter from "./routes/exploreRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env["PORT"] || 5000;
export const OpenWeatherApiKey = process.env["OPENWEATHERMAP_API_KEY"] || "";
export const RapidApiKey = process.env["RAPIDAPI_KEY"] || "";
export const weatherApiKey = process.env["WEATHERAPI_KEY"] || "";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  "http://localhost:5173", // Development
  "http://localhost:8080", // Production Docker
  "http://skycast-frontend:8080", // Docker internal
  "https://skycast-meliorasimp.vercel.app", // Vercel production
  "https://skycast.vercel.app", // Vercel custom domain (if configured)
  process.env["FRONTEND_URL"], // Environment variable for custom domain
].filter((origin): origin is string => Boolean(origin));

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);

      // Check if origin is in allowed list or matches Vercel pattern
      if (
        allowedOrigins.includes(origin) ||
        /^https:\/\/.*\.vercel\.app$/.test(origin)
      ) {
        return callback(null, true);
      }

      // Reject other origins
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use("/api", forecastRouter);
app.use("/api", airqualityRouter);
app.use("/api", moonPhaseRouter);
app.use("/api", marineWeatherRouter);
app.use("/api", exploreRouter);

// Health check endpoint for Docker
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "SkyCast API",
    version: "1.0.0",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
