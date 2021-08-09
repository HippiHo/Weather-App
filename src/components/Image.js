import styled from "styled-components";

const Img = styled.img`
  height: 60%;
  width: 60%;
`;

const Image = ({ source }) => (
  <>
    <Img src={source} alt={source} />
  </>
);

export default Image;
