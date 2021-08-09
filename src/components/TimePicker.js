import styled from "styled-components";
import Weather from "./Weather.js";

const ListWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TimePicker = ({ dailyWeather }) => (
  <ListWrapper>
    {dailyWeather.map((hour, index) => {
      const imageChoice = hour.weather[0].main;
      const time = new Date(hour.dt_txt).getHours();
      const temperature = hour.main.temp;
      return (
        <Weather
          key={index}
          imageChoice={imageChoice}
          time={time}
          temperature={temperature}
        />
      );
    })}
  </ListWrapper>
);

export default TimePicker;
