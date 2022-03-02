import styled from "styled-components";

const HeaderStyles = styled.div``;

const MainGridStyles = styled.div`
  .gridContainer {
    display: flex;
    flex-direction: row;

    #gridWrapper{
      width: 60vw;
      min-width: 800px;
    }

    #carGridWrapper {
      width: 10vw;
    }
  }
`;

const Styles = {
  HeaderStyles: HeaderStyles,
  MainGridStyles: MainGridStyles,
};

export default Styles;
