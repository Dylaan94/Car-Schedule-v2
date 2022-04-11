import styled from "styled-components";

const DivWrapper = styled.div`
  background: #f8f9ff;
  display: flex;
  flex-direction: row;
  font-family: "League Spartan", sans-serif;
  width: 100%;
`;

const MainStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  min-height: 3em;
  height: 8vh;
  border-bottom: 2px solid rgb(241, 242, 249);

  h1 {
    font-size: 2em;
    font-weight: 900;
    text-align: center;
  }
`;

const DateStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .dateContainer {
    display: flex;
    flex-direction: row;

    p {
      font-size: 1.2em;
      font-weight: 500;
      margin: 0.5em 0em 0.5em 0.5em;
    }

    #startDate {
      margin-right: 1em;
    }

    #endDate {
      margin-left: 1em;
    }
  }

  input {
    background: #8d97b8;
    color: white;
    height: 2em;
    width: 10em;
    text-align: center;
    font-weight: 600;
    padding: 0.3em;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  input:hover {
    background: #adb5bd;
  }
`;

const MainGridStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .gridContainer {
    display: flex;
    min-width: 900px;
    width: 85%;
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
      width: 90%;
      min-width: 800px;
      margin-right: 0.5em;
      font-size: 1em;
    }

    #carGridWrapper {
      min-width: 100px;
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
      cursor: pointer;

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

      @media print {
        .grid-stack-item-content {
          inset: 2px;
          width: 90%;
          height: 90%;
          border: 1px solid #343a40;
          border-radius: 5px;
        }
      }
    }

    .grid-stack-item-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media print {
      box-shadow: none;
    }
  }
`;

const SidebarStyles = styled.div`
  .sidebar {
    width: 15vw;
    height: 100vh;
    background: #03045e;
  }

  @media only screen and (max-width: 1200px) {
    .sidebar {
      display: none;
    }
  }
`;

const ButtonStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SaveButtonStyles = styled.div`
  padding: 1em;
  button {
    background: #43aa8b;
    color: white;
    height: 3em;
    width: 10em;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    height: 3.2em;
    width: 10.2em;
  }
`;

const ConfirmationPopupStyles = styled.div`
  .popup-box {
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
  }

  .box {
    position: relative;
    width: 60%;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;

    h1 {
      font-size: 2em;
      font-weight: 400;
      text-align: center;
    }

    h2 {
      font-size: 1.4em;
      text-align: center;
      a {
        font-weight: 900;
      }
    }

    .confirmationButtons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 1em;
    }

    .confirmSaveButton {
      background: #43aa8b;
      color: white;
      height: 3em;
      width: 10em;
      text-align: center;
      font-weight: 600;
      border-radius: 5px;
      border: none;
      margin-right: 1em;
      cursor: pointer;
    }

    .rejectSaveButton {
      background: #f94144;
      color: white;
      height: 3em;
      width: 10em;
      text-align: center;
      font-weight: 600;
      border-radius: 5px;
      border: none;
      margin-left: 1em;
      cursor: pointer;
    }

    button:hover {
      height: 3.2em;
      width: 10.2em;
    }
  }
`;

const ClearButtonStyles = styled.div`
  padding: 1em;
  button {
    background: #f94144;
    color: white;
    height: 3em;
    width: 10em;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    height: 3.2em;
    width: 10.2em;
  }
`;

const PrintButtonStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  button {
    background: #337ef2;
    color: white;
    height: 3em;
    min-width: 12em;
    width: 90%;
    text-align: center;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #0077b6;
  }
`;

const SchedulesListStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
  h1 {
    color: white;
    font-weight: 900;
    font-size: 1.2em;
    margin-bottom: 0.5em;
  }

  li {
    color: white;
    padding: 0.1em;
    list-style-type: none;

    a {
      padding-right: 0.6em;
      color: #8d97b8;
    }
  }

  li:hover {
    font-size: 1.1em;
    cursor: pointer;
    font-weight: 600;
  }
`;

const Styles = {
  DivWrapper: DivWrapper,
  MainStyles: MainStyles,
  HeaderStyles: HeaderStyles,
  DateStyles: DateStyles,
  MainGridStyles: MainGridStyles,
  SidebarStyles: SidebarStyles,
  ButtonStyles: ButtonStyles,
  SaveButtonStyles: SaveButtonStyles,
  ConfirmationPopupStyles: ConfirmationPopupStyles,
  ClearButtonStyles: ClearButtonStyles,
  PrintButtonStyles: PrintButtonStyles,
  SchedulesListStyles: SchedulesListStyles,
};

export default Styles;
