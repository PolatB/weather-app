import axios from "axios";
import {
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import cities from "../data/cities_of_turkey.json";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState(
    cities.find((item) => item.name === "Kocaeli")
  );

  const [weather, setWeather] = useState();

  const values = {
    weather,
    setWeather,
    cityName,
    setCityName,
    cities,
  };

  useEffect(() => {
    const getCity = async (cityName) => {
      const key = `e2e67a9a1d20ed709b65a7f8a5eed81f`;

      try {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.name}&units=metric&appid=${key}`
        );
        setWeather(data);
      } catch {
        alert("Veri alinirken bir hata oluştu");
      }
    };
    cityName && getCity(cityName);
  }, [cityName]);

  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
