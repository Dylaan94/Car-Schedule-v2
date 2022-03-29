import React, { Component } from "react";
import Styles from "./styles/Styles";

class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getGridItems = this.getGridItems.bind(this);
    this.handleGridItems = this.handleGridItems.bind(this);
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

  saveScheduleLocally = () => {
    let widgets = this.getGridItems();
    let widgets_serialised = JSON.stringify(widgets);
    window.localStorage.setItem("savedSchedule", widgets_serialised);
  };

  saveToDB = async() => {

    let widgets = this.getGridItems();

    let test = {
      test: "hello"
    }

    await fetch("http://localhost:5000/schedules/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(test)
    }).catch(error => {
      window.alert(error); // update this error handling
      return;
    })
  };

  render() {
    return (
      <Styles.SaveButtonStyles>
        <button className="saveButton" onClick={this.saveToDB}>
          Save Schedule
        </button>
      </Styles.SaveButtonStyles>
    );
  }
}

export default SaveButton;
