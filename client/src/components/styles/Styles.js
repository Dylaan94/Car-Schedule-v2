import styled from "styled-components";

const DivWrapper = styled.div`
  background: #f8f9ff;
  display: flex;
  flex-direction: row;
  font-family: "Open Sans", sans-serif;
`;

const MainStyles = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyles = styled.div`
  background: white;
  width: 100%;
  min-height: 3em;
  height: 8vh;
  border-bottom: 2px solid rgb(241, 242, 249);
`;

const MainGridStyles = styled.div`


  .gridContainer {
    display: flex;
    flex-direction: row;
    font-weight: 600;

    #gridWrapper {
      width: 60vw;
      min-width: 800px;
      background: white;
    }

    #carGridWrapper {
      width: 10vw;
    }
  }
`;

const SidebarStyles = styled.div`
  .sidebar {
    min-width: 12em;
    width: 15vw;
    height: 100vh;
    background: #03045e;
  }
`;

const Styles = {
  DivWrapper: DivWrapper,
  MainStyles: MainStyles,
  HeaderStyles: HeaderStyles,
  MainGridStyles: MainGridStyles,
  SidebarStyles: SidebarStyles,
};

export default Styles;
