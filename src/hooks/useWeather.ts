import { useCallback } from "react";
import { API } from "../api";

export const useWeather = () => {
  const API_KEY = "6409ee75b6ffc020adb31a565296a4bb";

  const getByCityName = useCallback(async (city: string) => {
    try {
      const { data } = await API.get(`weather`, {
        params: { q: city, units: "metric", appid: API_KEY },
      });
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }, []);

  const getByCoords = useCallback(async (lat: number, lon: number) => {
    try {
      const { data } = await API.get("weather", {
        params: { lat, lon, units: "metric", appid: API_KEY },
      });
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }, []);

  const getWeatherForecast = useCallback(async (lat: string, lon: string) => {
    try {
      const { data } = await API.get("forecast", {
        params: { lat, lon, units: "metric", appid: API_KEY },
      });
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }, []);

  return { getByCityName, getByCoords, getWeatherForecast };
};
