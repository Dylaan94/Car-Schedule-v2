import React, { Component } from "react";

class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getGridItems = this.getGridItems.bind(this);
    this.handleGridItems = this.handleGridItems.bind(this);
    this.saveScheduleLocally = this.saveScheduleLocally.bind(this);
  }

  getGridItems = () => {
    console.log(this.props.grid);
    return this.props.grid;
  };

  handleGridItems = () => {
    const grid = this.getGridItems();
    console.log(grid);
  };

  saveScheduleLocally = () => {};

  render() {
    return (
      <div>
        <button className="saveButton" onClick={this.handleGridItems}>
          Save Schedule
        </button>
      </div>
    );
  }
}

export default SaveButton;
