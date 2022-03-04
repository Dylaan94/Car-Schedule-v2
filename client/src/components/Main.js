import React, { Component } from "react";

// Component imports
import Header from "./Header";
import Grid from "./Grid";
import Date from "./Date"
// Styles imports
import Styles from "./styles/Styles";
import Sidebar from "./Sidebar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      constWidgetMain: [
        { x: 0, y: 0, h: 1, w: 1, name: "Day" },
        { x: 1, y: 0, h: 1, w: 1, name: "Oscar" },
        { x: 2, y: 0, h: 1, w: 1, name: "Erik" },
        { x: 3, y: 0, h: 1, w: 1, name: "Alexa" },
        { x: 4, y: 0, h: 1, w: 1, name: "Zach" },
        { x: 5, y: 0, h: 1, w: 1, name: "Abbie" },
        { x: 6, y: 0, h: 1, w: 1, name: "Adiola" },
        { x: 7, y: 0, h: 1, w: 1, name: "Tom" },
        { x: 0, y: 1, h: 1, w: 1, name: "Monday" },
        { x: 0, y: 2, h: 1, w: 1, name: "Tuesday" },
        { x: 0, y: 3, h: 1, w: 1, name: "Wednesday" },
        { x: 0, y: 4, h: 1, w: 1, name: "Thursday" },
        { x: 0, y: 5, h: 1, w: 1, name: "Friday" },
        { x: 0, y: 6, h: 1, w: 1, name: "Last Friday" },
      ],
      constWidgetCar: [
        { x: 0, y: 0, h: 1, w: 1, name: "BOE" },
        { x: 1, y: 0, h: 1, w: 1, name: "City" },
        { x: 2, y: 0, h: 1, w: 1, name: "Special" },
      ],
    };
  }

  render() {
    return (
      <Styles.DivWrapper>
        <Sidebar></Sidebar>
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
          ></Grid>
        </Styles.MainStyles>
      </Styles.DivWrapper>
    );
  }
}
export default Main;
