import styled from "styled-components";
import SelectedWeather from "./SelectedWeather.js";
import TimePicker from "./TimePicker.js";

const AppWrapper = styled.div`
  margin: 10px;
`;

const App = () => (
  <AppWrapper>
    <SelectedWeather />
    <TimePicker />
  </AppWrapper>
);

export default App;
