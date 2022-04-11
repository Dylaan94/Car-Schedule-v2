import React, { Component } from "react";

// Component imports
import Header from "./Header";
import Grid from "./Grid";
import Date from "./Date";
import HowToUse from "./HowToUse"

// Styles imports
import Styles from "./styles/Styles";
import Sidebar from "./Sidebar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constWidgetMain: [
        { x: 0, y: 0, h: 1, w: 1, content: "Day" },
        { x: 1, y: 0, h: 1, w: 1, content: "Oscar" },
        { x: 2, y: 0, h: 1, w: 1, content: "Erik" },
        { x: 3, y: 0, h: 1, w: 1, content: "Alexa" },
        { x: 4, y: 0, h: 1, w: 1, content: "Zach" },
        { x: 5, y: 0, h: 1, w: 1, content: "Abbie" },
        { x: 6, y: 0, h: 1, w: 1, content: "Adiola" },
        { x: 7, y: 0, h: 1, w: 1, content: "Tom" },
        { x: 0, y: 1, h: 1, w: 1, content: "Monday" },
        { x: 0, y: 2, h: 1, w: 1, content: "Tuesday" },
        { x: 0, y: 3, h: 1, w: 1, content: "Wednesday" },
        { x: 0, y: 4, h: 1, w: 1, content: "Thursday" },
        { x: 0, y: 5, h: 1, w: 1, content: "Friday" },
        { x: 0, y: 6, h: 1, w: 1, content: "Last Friday" },
      ],
      constWidgetCar: [
        { x: 0, y: 0, h: 1, w: 1, content: "BOE" },
        { x: 1, y: 0, h: 1, w: 1, content: "City" },
        { x: 2, y: 0, h: 1, w: 1, content: "Special" },
      ],
      clickedSchedule: {},
    };

    this.getClickedSchedule = this.getClickedSchedule.bind(this);
    this.removeGetClickedSchedule = this.removeGetClickedSchedule.bind(this);
  }

  getClickedSchedule = (data) => {
    let newWidgets = data.schedule.widgets;
    this.setState(
      {
        clickedSchedule: newWidgets,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  removeGetClickedSchedule = () => {
    this.setState({
      clickedSchedule: {}
    });
  };

  render() {
    return (
      <Styles.DivWrapper>
        <Sidebar getClickedSchedule={this.getClickedSchedule}></Sidebar>
        <Styles.MainStyles>
          <Header></Header>
          <Date></Date>
          <Grid
            gridOptions={{
              column: 8,
              float: true,
              cellHeight: "50px", // set for now
              minRow: 7,
              maxRow: 7,
              acceptWidgets: true,
              class: "mainGrid",
            }}
            constWidgets={this.state.constWidgetMain}
            carGridOptions={{
              column: 1,
              float: false,
              cellHeight: "50px", // set for now
              minRow: 3,
              maxRow: 3,
              acceptWidgets: false,
              class: "carGrid",
            }}
            constWidgetCar={this.state.constWidgetCar}
            clickedSchedule={this.state.clickedSchedule}
            removeGetClickedSchedule={this.removeGetClickedSchedule}
          ></Grid>
          <HowToUse></HowToUse>
        </Styles.MainStyles>
      </Styles.DivWrapper>
    );
  }
}
export default Main;
