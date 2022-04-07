import React, { Component } from "react";

import Styles from "./styles/Styles";

import PrintButton from "./PrintButton";
import SchedulesList from "./SchedulesList";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedSchedule: {},
    };
    this.resetGrid = this.resetGrid.bind(this);
    this.getClickedSchedule = this.getClickedSchedule.bind(this);
  }

  resetGrid = () => {
    this.grid.removeAll();
  };

  // send clicked schedule data up to Main component
  getClickedSchedule = (data) => {
    this.props.getClickedSchedule(data);
  };

  render() {
    return (
      <Styles.SidebarStyles className="sidebarDiv">
        <div className="sidebar">
          <PrintButton></PrintButton>
          <SchedulesList
            getClickedSchedule={this.getClickedSchedule}
          ></SchedulesList>
        </div>
      </Styles.SidebarStyles>
    );
  }
}

export default Sidebar;
