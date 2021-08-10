import styled from "styled-components";
import Weather from "./Weather.js";
import { formatTempToCelsius, formatToHours } from "../helpers";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
  margin: 0 auto;
  max-width: 1000px;
  overflow: scroll;

  @media only screen and (min-width: 481px) {
    font-size: 1rem;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
    overflow: visible;
  }
`;

const TimePicker = ({ dailyWeather, setSelectedId, selectedId }) => {
  return (
    <ListWrapper>
      {dailyWeather.map((hour, index) => {
        const imageChoice = hour.weather[0].main;
        const time = formatToHours(hour.dt_txt);
        const temperature = formatTempToCelsius(hour.main.temp);
        const id = hour.dt;
        return (
          <Weather
            key={index}
            imageChoice={imageChoice}
            time={time}
            temperature={temperature}
            id={id}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        );
      })}
    </ListWrapper>
  );
};

export default TimePicker;
