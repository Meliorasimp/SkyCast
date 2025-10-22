import express from "express";
import dotenv from "dotenv";
import forecastRouter from "./routes/forecastRoute.js";
import airqualityRouter from "./routes/airqualityRoute.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env["PORT"] || 5000;
export const OpenWeatherApiKey = process.env["OPENWEATHERMAP_API_KEY"] || "";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api", forecastRouter);
app.use("/api", airqualityRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
