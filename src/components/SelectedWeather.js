import styled from "styled-components";
import Image from "./Image.js";
import sun from "../assets/weather-sun.svg";
import cloud from "../assets/weather-cloud.svg";

const SelectedWeatherWrapper = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const SelectedWeather = ({ city, selectedHour }) => {
  let weatherDescription = "";
  let tempObject = {};
  let minMaxTemp = "";
  let currentTemp = "";
  let date = "";
  let convertedDate = "";

  if (
    selectedHour &&
    selectedHour.weather &&
    selectedHour.weather.length !== 0
  ) {
    weatherDescription = selectedHour.weather[0].main;
    tempObject = selectedHour.main;
    currentTemp = tempObject.temp;
    minMaxTemp = `${tempObject.temp_max}°/ ${tempObject.temp_min}°`;
    date = new Date(selectedHour.dt_txt);
    convertedDate = date.getDate();
  }
  return (
    <SelectedWeatherWrapper>
      <div>
        <div>{weatherDescription}</div>
        <div>{minMaxTemp}</div>
        <div>{city}</div>
      </div>
      <div>
        {weatherDescription === "Clear" ? (
          <Image source={sun} />
        ) : (
          <Image source={cloud} />
        )}
        <div>{currentTemp}</div>
        <div>{convertedDate}</div>
      </div>
    </SelectedWeatherWrapper>
  );
};

export default SelectedWeather;
