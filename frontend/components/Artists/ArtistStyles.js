import { styled } from "styled-components";

const Container = styled.div`
  width: 975px;
  display: flex;
  margin: auto;
  border: 0.5px solid lightgrey;
  flex-direction: column;
`;

const Banner = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 975px;
  height: 220px;
`;

const Tabs = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  border-bottom: 0.5px solid lightgrey;

  span {
    margin: 15px;
  }
`;

const DetailsBox = styled.div`
  display: flex;
`;

const OutletBox = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
`;

export { Container, Banner, Tabs, DetailsBox, OutletBox };
