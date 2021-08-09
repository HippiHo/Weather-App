import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SelectedWeather from "./SelectedWeather.js";
import TimePicker from "./TimePicker.js";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const App = () => {
  const [city, setCity] = useState("");
  const [dailyWeather, setDailyWeather] = useState([]);
  const [selectedId, setSelectedId] = useState(1487246400);
  const [selectedHour, setSelectedHour] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22`
      );
      extractData(response.data);
      console.log("response", response);
    } catch (err) {
      console.error(err);
    }
  };

  const extractData = (rawData) => {
    setCity(rawData.city.name);
    setDailyWeather(filterForDay(rawData.list));
    setSelectedHour(selectedId);
  };

  const filterForDay = (days) => {
    return days.filter((day) => day.dt_txt.split(" ")[0] === "2017-02-17");
  };

  useEffect(() => {
    setSelectedHour(dailyWeather.find((element) => element.dt === selectedId));
  }, [selectedId]);

  return (
    <AppWrapper>
      <SelectedWeather city={city} selectedHour={selectedHour} />
      <TimePicker dailyWeather={dailyWeather} setSelectedId={setSelectedId} />
    </AppWrapper>
  );
};

export default App;
