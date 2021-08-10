import styled from "styled-components";
import Image from "./Image.js";
import sun from "../assets/weather-sun.svg";
import cloud from "../assets/weather-cloud.svg";

const WeatherWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60px;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-right: 10px;
  :hover {
    background-color: #3b3f69;
  }

  @media only screen and (min-width: 481px) {
    min-width: 80px;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    min-width: 100px;
  }
`;

const Time = styled.div`
  color: #a8aabd;
`;

const Temperature = styled.div`
  font-weight: bold;
  font-size: 1rem;

  @media only screen and (min-width: 481px) {
    font-size: 1.5rem;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Weather = ({
  time,
  imageChoice,
  temperature,
  setSelectedId,
  selectedId,
  id,
}) => {
  return (
    <WeatherWrapper
      onClick={() => {
        setSelectedId(id);
      }}
      className={selectedId && selectedId === id ? "active" : ""}
    >
      <Time>{time}:00</Time>
      {imageChoice === "Clear" ? (
        <Image source={sun} />
      ) : (
        <Image source={cloud} />
      )}
      <Temperature>{temperature}°</Temperature>
    </WeatherWrapper>
  );
};

export default Weather;
