import type { Request, Response } from "express";
import axios from "axios";
import { OpenWeatherApiKey } from "../main.js";

export const getForecast = async (req: Request, res: Response) => {
  const { lat, lon } = req.body;

  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OpenWeatherApiKey}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch forecast data" });
    console.error(error);
  }
};

export const getFiveDayForecast = async (req: Request, res: Response) => {
  const { lat, lon } = req.body;

  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OpenWeatherApiKey}`
    );
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch five day forecast data" });
    console.error(error);
  }
};
