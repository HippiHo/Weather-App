import styled from "styled-components";
import Weather from "./Weather.js";
import { formatTempToCelsius, formatToHours } from "../helpers";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  padding: 0px 24px;
  position: absolute;
  top: 50vh;
  width: 100%;
  overflow: scroll;
  height: 50vh;

  @media only screen and (min-width: 992px) {
    font-size: 2rem;
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
