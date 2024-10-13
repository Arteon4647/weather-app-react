import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import { TodayWeatherDataType } from "../types/todayWeatherData";
import { ForecastWeatherDataType } from "../types/forecastWeatherDataType";
type WeatherContextType = {
  weatherToday?: TodayWeatherDataType;
  setWeatherData: (data: TodayWeatherDataType) => void;
  resetWeatherData: () => void;

  forecastWeather?: ForecastWeatherDataType;
  setForecastWeatherData: (data: ForecastWeatherDataType) => void;
  resetForecastWeatherData: () => void;

  weatherHistory?: Record<string, TodayWeatherDataType>;
  addWeatherToHistory: (data: TodayWeatherDataType) => void;
  removeWeatherFromHistory: (name: string) => void;
};
export const WeatherContext = createContext<WeatherContextType | null>(null);

export const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todayWeatherData, setTodayWeatherData] = useState<
    TodayWeatherDataType | undefined
  >();

  const [forecastData, setForecastData] = useState<
    ForecastWeatherDataType | undefined
  >();

  const [weatherHistory, setWeatherHistory] = useState<
    Record<string, TodayWeatherDataType> | undefined
  >();

  useEffect(() => {
    const history = localStorage.getItem("history");

    if (history) setWeatherHistory(JSON.parse(history));
  }, []);

  const setWeatherToday = useCallback((data: TodayWeatherDataType) => {
    setTodayWeatherData(data);
  }, []);

  const resetWeatherData = useCallback(() => {
    setTodayWeatherData(undefined);
  }, []);

  const setForecastWeatherData = useCallback(
    (data: ForecastWeatherDataType) => {
      setForecastData(data);
    },
    []
  );

  const resetForecastWeatherData = useCallback(() => {
    setForecastData;
  }, []);

  const addWeatherToHistory = useCallback((data: TodayWeatherDataType) => {
    const history = localStorage.getItem("history");

    const parsedHistory = history ? JSON.parse(history) : {};

    parsedHistory[data.name] = data;

    localStorage.setItem("history", JSON.stringify(parsedHistory));

    setWeatherHistory(parsedHistory);
  }, []);

  const removeWeatherFromHistory = useCallback((name: string) => {
    const history = localStorage.getItem("history");

    const parsedHistory = history ? JSON.parse(history) : {};

    delete parsedHistory[name];

    localStorage.setItem("history", JSON.stringify(parsedHistory));

    setWeatherHistory(parsedHistory);
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherToday: todayWeatherData,
        setWeatherData: setWeatherToday,
        resetWeatherData: resetWeatherData,

        forecastWeather: forecastData,
        setForecastWeatherData,
        resetForecastWeatherData,

        weatherHistory,
        addWeatherToHistory,
        removeWeatherFromHistory,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
