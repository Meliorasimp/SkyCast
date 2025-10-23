import axios from "axios";
import type { Request, Response } from "express";
import { RapidApiKey } from "../main.js";

export const fetchMoonPhaseData = async (req: Request, res: Response) => {
  const { lat, lon } = req.body;

  if (!lat || !lon) {
    res.status(400).json({ error: "Latitude and longitude are required" });
    return;
  }
  try {
    const response = await axios.get(
      "https://moon-phase.p.rapidapi.com/advanced",
      {
        params: {
          lat: lat,
          lon: lon,
        },
        headers: {
          "x-rapidapi-key": RapidApiKey,
          "x-rapidapi-host": "moon-phase.p.rapidapi.com",
        },
      }
    );

    console.log("Moon Phase API success! Status:", response.status);
    console.log("Full Axios response keys:", Object.keys(response));
    console.log("Moon phase data:", response.data);
    res.status(200).json(response.data);
  } catch (error: any) {
    console.error("Error fetching moon phase data:", {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      data: error.response?.data,
      headers: error.response?.headers,
    });

    if (error.response?.status === 403) {
      const errorMessage = error.response?.data?.message || "Unknown 403 error";
      console.error("403 Error details:", errorMessage);

      res.status(403).json({
        error: "API access denied",
        details: errorMessage,
        suggestion:
          "Check if your RapidAPI key is correct and has access to this specific API",
      });
    } else if (error.response?.status === 429) {
      res.status(429).json({ error: "Rate limit exceeded" });
    } else {
      res.status(500).json({
        error: "Failed to fetch moon phase data",
        details: error.response?.data || error.message,
      });
    }
  }
};
