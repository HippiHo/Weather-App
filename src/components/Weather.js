import React, { useState } from "react";
import styled from "styled-components";
import Image from "./Image.js";
import sun from "../assets/weather-sun.svg";
import cloud from "../assets/weather-cloud.svg";

const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0px;

  position: relative;
  width: 212px;
  height: 400px;

  :hover {
    background-color: #3b3f69;
  }
`;

const Time = styled.div`
  color: #a8aabd;

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Temperature = styled.div`
  font-weight: bold;

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Weather = ({ time, imageChoice, temperature, setSelectedId, id }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <WeatherWrapper
      onClick={() => {
        setSelectedId(id);
        setIsActive(!isActive);
      }}
      className={isActive && "active"}
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
