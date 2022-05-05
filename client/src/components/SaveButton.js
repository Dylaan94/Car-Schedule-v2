import React, { Component } from "react";
import Styles from "./styles/Styles";

class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPopup: false,
    };
    this.getGridItems = this.getGridItems.bind(this);
    this.handleGridItems = this.handleGridItems.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
    this.saveScheduleLocally = this.saveScheduleLocally.bind(this);
    this.saveToDB = this.saveToDB.bind(this);
  }

  getGridItems = () => {
    return this.props.addedWidgets;
  };

  handleGridItems = () => {
    const grid = this.getGridItems();
    console.log(grid);
  };

  togglePopup = () => {
    console.log();
    if (this.state.displayPopup === true) {
      this.setState({
        displayPopup: false,
      });
    } else {
      this.setState({
        displayPopup: true,
      });
    }
  };

  saveScheduleLocally = () => {
    let widgets = this.getGridItems();
    let widgets_serialised = JSON.stringify(widgets);
    window.localStorage.setItem("savedSchedule", widgets_serialised);
  };

  saveToDB = async () => {
    let widgets = this.getGridItems();
    // could potentially use context api for this
    let widgetsObject = {
      widgets,
      startDate: document.getElementById("startDate").innerText,
      endDate: document.getElementById("endDate").innerText,
    };

    console.log(widgetsObject);

    /* fetches all schedules, toggles popup, and then 
    reloads window so that they can be rendered in */

    await fetch("http://localhost:5000/schedules/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(widgetsObject),
    })
      .then(() => {
        this.togglePopup();
        window.location.reload();
      })
      .catch((error) => {
        window.alert(error); // update this error handling
        return;
      });
  };

  render() {
    return (
      <>
        <Styles.SaveButtonStyles>
          <button className="saveButton" onClick={this.togglePopup}>
            Save Schedule
          </button>
        </Styles.SaveButtonStyles>
        {this.state.displayPopup ? (
          <Styles.ConfirmationPopupStyles>
            <div className="popupBox">
              <div className="box">
                <h1> Are you sure you want to save schedule?</h1>
                <h2>
                  <a>Warning: </a> You will not be able to edit once it has been
                  saved
                </h2>
                <div className="confirmationButtons">
                  <button className="confirmSaveButton" onClick={this.saveToDB}>
                    Yes, fire away!
                  </button>
                  <button
                    className="rejectSaveButton"
                    onClick={this.togglePopup}
                  >
                    No, take me back
                  </button>
                </div>
              </div>
            </div>
          </Styles.ConfirmationPopupStyles>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default SaveButton;
