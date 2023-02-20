import React from "react";
import { useWeather } from "../context/WeatherContext";

function Header() {
  const { cityName, cities, setCityName } = useWeather();

  function changeCity(e) {
    cities.filter((item) => {
      if (item.name === e.target.value) {
        setCityName(item);
      }
      return item;
    });
  }

  return (
    <div className="dropdown">
      <select
        className="dropdownBox"
        value={cityName.name}
        onChange={changeCity}
      >
        {cities.map((item, key) => {
          return (
            <option value={item.name} key={key}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Header;
