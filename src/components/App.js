import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SelectedWeather from "./SelectedWeather.js";
import TimePicker from "./TimePicker.js";

const AppWrapper = styled.div`
  margin: 10px;
`;

const App = () => {
  const [city, setCity] = useState("");
  const [dailyWeather, setDailyWeather] = useState([]);
  const [selectedHour, setSelectedHour] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22`
      );
      setCity(response.data.city.name);
      setDailyWeather(response.data.list);
      setSelectedHour(response.data.list[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AppWrapper>
      <SelectedWeather city={city} selectedHour={selectedHour} />
      <TimePicker dailyWeather={dailyWeather} />
    </AppWrapper>
  );
};

export default App;
