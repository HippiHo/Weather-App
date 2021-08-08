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

const SelectedWeather = () => (
  <SelectedWeatherWrapper>
    <Image source={sun} />
    <Image source={cloud} />
    <p>Selected</p>
  </SelectedWeatherWrapper>
);

export default SelectedWeather;
