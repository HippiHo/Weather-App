import styled from "styled-components";
import Image from "./Image.js";
import sun from "../assets/weather-sun.svg";
import cloud from "../assets/weather-cloud.svg";
import { formatTempToCelsius, formatToDay } from "../helpers";

const SelectedWeatherWrapper = styled.div`
  display: grid;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-template-rows: 20% 40% 40%;
  grid-template-columns: repeat(6, 1fr);
  max-width: 1627px;
  height: 50vh;
  padding: 20px;
  position: fixed;

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
  }

  /* Large Devices, Wide Screens */
  @media only screen and (min-width: 1200px) {
  }
`;

const ImageWrapper = styled.div`
  grid-column: 1 / 7;
  grid-row: 2 / 3;

  @media only screen and (min-width: 481px) {
    grid-column: 1 / 3;
    grid-row: 1 / 4;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

const TopWrapper = styled.div`
  color: #a8aabd;
  font-size: 1rem;
  grid-column: 1 / 7;
  grid-row: 1 / 2;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (min-width: 481px) {
    grid-column: 3 / 7;
    grid-row: 1 / 2;
  }

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

const SelectedTemp = styled.div`
  font-size: 3rem;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-weight: bold;

  @media only screen and (min-width: 481px) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    font-size: 9rem;
  }
`;

const SelectedDay = styled.div`
  font-size: 1.5rem;
  grid-column: 3 / 7;
  grid-row: 3 / 4;
  font-weight: bold;

  @media only screen and (min-width: 481px) {
    grid-column: 5 / 7;
    grid-row: 2 / 4;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width: 992px) {
    font-size: 4rem;
  }
`;

const SelectedWeather = ({ city, selectedHour }) => {
  let weatherDescription = "";
  let tempObject = {};
  let minMaxTemp = "";
  let currentTemp = "";
  let convertedDate = "";

  if (
    selectedHour &&
    selectedHour.weather &&
    selectedHour.weather.length !== 0
  ) {
    weatherDescription = selectedHour.weather[0].main;
    tempObject = selectedHour.main;
    currentTemp = formatTempToCelsius(tempObject.temp);
    minMaxTemp = `${formatTempToCelsius(
      tempObject.temp_max
    )}°/ ${formatTempToCelsius(tempObject.temp_min)}°`;
    convertedDate = formatToDay(selectedHour.dt_txt);
  }
  return (
    <SelectedWeatherWrapper>
      <ImageWrapper>
        {weatherDescription === "Clear" ? (
          <Image source={sun} />
        ) : (
          <Image source={cloud} />
        )}
      </ImageWrapper>
      <TopWrapper>
        <div>{weatherDescription}</div>
        <div>{minMaxTemp}</div>
        <div>{city}</div>
      </TopWrapper>
      <SelectedTemp>{currentTemp}°</SelectedTemp>
      <SelectedDay>{convertedDate}</SelectedDay>
    </SelectedWeatherWrapper>
  );
};

export default SelectedWeather;
