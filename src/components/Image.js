import styled from "styled-components";

const Img = styled.img`
  height: 20%;
  width: 20%;
`;

const Image = ({ source }) => (
  <>
    <Img src={source} alt={source} />
  </>
);

export default Image;
