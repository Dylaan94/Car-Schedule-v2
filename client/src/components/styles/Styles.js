import styled from "styled-components";

const DivWrapper = styled.div`
  background: #f8f9ff;
  display: flex;
  flex-direction: row;
  font-family: "League Spartan", sans-serif;
`;

const MainStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  width: 100%auto;
  min-height: 3em;
  height: 8vh;
  border-bottom: 2px solid rgb(241, 242, 249);

  h1 {
    font-size: 2em;
    font-weight: 900;
    text-align: center;
  }
`;

const MainGridStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  .gridContainer {
    display: flex;
    width: 90%;
    height: 90%;
    flex-direction: row;
    justify-content: center;
    font-weight: 600;
    margin-top: 1em;
    border: 1.5px solid rgb(241, 242, 249);
    border-radius: 10px;
    box-shadow: 2px 2px 3px rgb(206, 212, 218);
    background: white;
    padding: 1em;

    #gridWrapper {
      width: 80vw;
      min-width: 800px;
      margin-right: 0.5em;
      font-size: 1em;
    }

    #carGridWrapper {
      width: 10vw;
      height: 100%;
    }

    [gs-id="BOE"],
    [gs-id="City"],
    [gs-id="Special"] {
      color: black;
      font-weight: 900;
      font-size: 1em;
      border: none;
      background: white;

      .grid-stack-item-content {
        inset: 2px;
        border-radius: 5px;
      }
    }

    [gs-id="BOE"] {
      .grid-stack-item-content {
        background: #f2f0fe;
        border: 2px solid #5d48f5;
      }
    }
    [gs-id="City"] {
      .grid-stack-item-content {
        background: #e8f3fe;
        border: 2px solid #337ef2;
      }
    }
    [gs-id="Special"] {
      .grid-stack-item-content {
        background: #fbebf5;
        border: 2px solid #e93e99;
      }
    }

    [gs-id="constWidget"] {
      height: 100%;
      background: #f9fafd;
    }

    .grid-stack-item-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const SidebarStyles = styled.div`
  .sidebar {
    min-width: 5em;
    max-width: 10em;
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
