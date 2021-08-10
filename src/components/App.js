import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SelectedWeather from "./SelectedWeather.js";
import TimePicker from "./TimePicker.js";

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const IntroMessage = styled.div`
  font-size: 2rem;
  padding: 1rem;
  text-align: center;
`;

const App = () => {
  const [city, setCity] = useState("");
  const [dailyWeather, setDailyWeather] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedHour, setSelectedHour] = useState({});
  const [intoMessage, setIntroMessage] = useState(["Loading..."]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22`
        );
        extractData(response.data);
      } catch (err) {
        console.error(err);
        setIntroMessage(["404", "We are sorry, there is no data coming..."]);
      }
    };

    getData();
  }, []);

  const extractData = (rawData) => {
    setCity(rawData.city.name);
    setDailyWeather(filterForDay(rawData.list));
    setSelectedId(filterForDay(rawData.list)[0].dt);
    setSelectedHour(rawData.list[0]);
  };

  const filterForDay = (days) => {
    return days.filter((day) => day.dt_txt.split(" ")[0] === "2017-02-18");
  };

  useEffect(() => {
    setSelectedHour(dailyWeather.find((element) => element.dt === selectedId));
  }, [selectedId]);

  return (
    <AppWrapper>
      {selectedId ? (
        <>
          <SelectedWeather city={city} selectedHour={selectedHour} />
          <TimePicker
            dailyWeather={dailyWeather}
            setSelectedId={setSelectedId}
            selectedId={selectedId}
          />
        </>
      ) : (
        <IntroMessage>
          <h1>{intoMessage[0]}</h1>
          {intoMessage[1]}
        </IntroMessage>
      )}
    </AppWrapper>
  );
};

export default App;
