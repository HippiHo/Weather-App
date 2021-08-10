import styled from "styled-components";

const Img = styled.img`
  height: 30px;
  width: 30px;
  padding-top: 20%;
  padding-bottom: 20%;

  @media only screen and (min-width: 481px) {
    height: 40px;
    width: 40px;
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
  }
`;

const Image = ({ source }) => (
  <>
    <Img src={source} alt={source} />
  </>
);

export default Image;
