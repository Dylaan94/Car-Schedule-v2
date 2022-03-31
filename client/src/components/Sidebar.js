import React, { Component } from "react";

import Styles from "./styles/Styles";
import ClearButton from "./ClearButton"
import Grid from "./Grid"

import PrintButton from "./PrintButton"
import SchedulesList from "./SchedulesList"

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.resetGrid = this.resetGrid.bind(this)
  }

  resetGrid = () => {
    this.grid.removeAll();
  }

  render() {
    return (
      <Styles.SidebarStyles className = "sidebarDiv">
        <div className="sidebar">
          <PrintButton></PrintButton>
          <SchedulesList></SchedulesList>
        </div>
      </Styles.SidebarStyles>
    );
  }
}

export default Sidebar