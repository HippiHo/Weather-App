import styled from "styled-components";
import Image from "./Image.js";
import sun from "../assets/weather-sun.svg";
// import cloud from "../assets/weather-cloud.svg";

const WeatherWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Time = styled.div`
  color: #a8aabd;
`;

const Temperature = styled.div`
  font-weight: bold;
`;

const Weather = () => (
  <WeatherWrapper>
    <Time>Time</Time>
    <Image source={sun} />
    <Temperature>Temperature</Temperature>
  </WeatherWrapper>
);

export default Weather;
