import { useContext, useMemo } from "react";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { WeatherCard } from "../common/WeatherCard";
import { Button } from "flowbite-react";
import { FaHeart, FaTrash } from "react-icons/fa";

export const WeatherDetails = () => {
  const {
    weatherToday,
    addWeatherToHistory,
    removeWeatherFromHistory,
    weatherHistory,
  } = useContext(WeatherContext)!;

  const isAlreadyAddedToHistory = useMemo(
    () =>
      weatherToday && weatherHistory && weatherToday?.name in weatherHistory,
    [weatherHistory, weatherToday]
  );

  if (!weatherToday) return null;

  const onLikeWeatherLocation = () => {
    addWeatherToHistory(weatherToday);
  };

  const onRemoveFromHistory = () => {
    removeWeatherFromHistory(weatherToday.name);
  };

  const addToHistoryButton = isAlreadyAddedToHistory ? (
    <Button
      className="bg-red-800 hover:enabled:bg-red-600"
      onClick={onRemoveFromHistory}
    >
      <FaTrash />
    </Button>
  ) : (
    <Button onClick={onLikeWeatherLocation}>
      <FaHeart />
    </Button>
  );

  return (
    <div className="w-max flex flex-row m-5">
      <WeatherCard weather={weatherToday} actions={[addToHistoryButton]} />
    </div>
  );
};
