import styled from "styled-components";

const MainStyles = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderStyles = styled.div`
  width: 100vw;
  min-height: 3em;
  height: 8vh;
`;

const MainGridStyles = styled.div`
  .gridContainer {
    display: flex;
    flex-direction: row;

    #gridWrapper {
      width: 60vw;
      min-width: 800px;
    }

    #carGridWrapper {
      width: 10vw;
    }
  }
`;

const SidebarStyles = styled.div`
  .sidebar {
    display: flex;
    flex-direction: row;
    min-width: 12em;
    width: 15vw;
    height: 100vh;
    background: #03045e;
  }
`;

const Styles = {
  MainStyles: MainStyles,
  HeaderStyles: HeaderStyles,
  MainGridStyles: MainGridStyles,
  SidebarStyles: SidebarStyles,
};

export default Styles;
