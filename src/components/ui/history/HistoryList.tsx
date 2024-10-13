import { useContext, useMemo } from "react";
import { WeatherCard } from "../common/WeatherCard";
import { WeatherContext } from "../../../contexts/WeatherContext";
import { Button } from "flowbite-react";
import { FaTrash } from "react-icons/fa";

export const HistoryList = () => {
  const { weatherHistory, removeWeatherFromHistory } =
    useContext(WeatherContext)!;

  const weatherHistoryDataItems = useMemo(
    () => weatherHistory && Object.values(weatherHistory),
    [weatherHistory]
  );

  return (
    <div className="flex flex-col align-items-center w-full gap-3">
      <h3 className="text-gray-700 text-xl font-bold">History list</h3>
      {weatherHistoryDataItems?.map((data) => (
        <WeatherCard
          key={data.name}
          weather={data}
          actions={[
            <Button className="bg-red-800 hover:enabled:bg-red-600" onClick={() => removeWeatherFromHistory(data.name)}>
              <FaTrash />
            </Button>,
          ]}
        />
      ))}
    </div>
  );
};
