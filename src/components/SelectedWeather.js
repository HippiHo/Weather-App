import styled from "styled-components";
import Image from "./Image.js";
import sun from "../assets/weather-sun.svg";
import cloud from "../assets/weather-cloud.svg";
import { formatTempToCelsius, formatToDay } from "../helpers";

const SelectedWeatherWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 20% 40% 1fr;
  grid-template-columns: repeat(4, 25%);
  max-width: 1000px;
  height: 40%;
  padding: 10px;
  margin: 0 auto;

  @media only screen and (min-width: 481px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 30% 60% auto;
    padding: 45px;
    height: 35%;
    padding: 0px 20px;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  grid-column: 1 / 7;
  grid-row: 2 / 3;
  display: grid;
  justify-content: center;
  align-content: start;

  img {
    height: 100px;
    width: 100px;
    padding: 0;

    @media only screen and (min-width: 481px) {
      height: 110px;
      width: 110px;
      padding-top: 80%;
    }

    /* Small Devices, Tablets */
    @media only screen and (min-width: 768px) {
      padding-top: 65%;
      height: 150px;
      width: 150px;
    }
  }

  @media only screen and (min-width: 481px) {
    grid-column: 1 / 3;
    grid-row: 1 / 4;
  }
`;

const TopWrapper = styled.div`
  color: #a8aabd;
  font-size: 0.8rem;
  grid-column: 1 / 7;
  grid-row: 1 / 2;
  display: grid;
  grid-gap: 10px;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (min-width: 481px) {
    font-size: 1rem;
    grid-column: 3 / 7;
    grid-row: 1 / 2;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const GreyOverview = styled.div`
  display: grid;
  align-content: center;
  align-self: center;
  justify-self: center;

  @media only screen and (min-width: 481px) {
    align-self: end;
    justify-self: start;
  }
`;

const SelectedTemp = styled.div`
  font-size: 2.5rem;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  font-weight: bold;
  display: grid;
  justify-self: center;

  @media only screen and (min-width: 481px) {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
    font-size: 5.3rem;
    padding-left: 15%;
    justify-self: start;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 6.2rem;
  }
`;

const SelectedDay = styled.div`
  font-size: 1.3rem;
  grid-column: 3 / 7;
  grid-row: 3 / 4;
  font-weight: bold;
  display: grid;
  justify-content: center;
  align-content: start;
  width: 80%;

  @media only screen and (min-width: 481px) {
    font-size: 2rem;
    grid-column: 5 / 7;
    grid-row: 2 / 4;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 2.7rem;
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
        <GreyOverview>{weatherDescription}</GreyOverview>
        <GreyOverview>{minMaxTemp}</GreyOverview>
        <GreyOverview>{city}</GreyOverview>
      </TopWrapper>
      <SelectedTemp>{currentTemp}°</SelectedTemp>
      <SelectedDay>{convertedDate}</SelectedDay>
    </SelectedWeatherWrapper>
  );
};

export default SelectedWeather;
