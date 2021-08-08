import styled from "styled-components";
import Weather from "./Weather.js";

const ListWrapper = styled.div`
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const TimePicker = () => (
  <ListWrapper>
    <Weather />
    <Weather />
    <Weather />
  </ListWrapper>
);

export default TimePicker;
