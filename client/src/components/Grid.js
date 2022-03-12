import React, { Component } from "react";

import SaveButton from "./SaveButton";
import DeleteButton from "./ClearButton";

//gridstack imports
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";

// styles imports
import Styles from "./styles/Styles";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridOptions: this.props.gridOptions,
      constWidgets: this.props.constWidgets,
      carOptions: this.props.carGridOptions,
      constWidgetCar: this.props.constWidgetCar,
    };
    this.initGrid = this.initGrid.bind(this);
    this.initCarGrid = this.initCarGrid.bind(this);
    this.handleGrid = this.handleGrid.bind(this);
    this.handleCarGrid = this.handleCarGrid.bind(this);
    this.updateGridState = this.updateGridState.bind(this);
    this.clearGrid = this.clearGrid.bind(this);
  }

  initGrid = () => {
    // initialised grid based off data in state
    const { gridOptions, constWidgets } = this.state;
    const node = {};

    // adds grid to the element with the id gridWrapper
    this.grid = GridStack.addGrid(
      document.getElementById("gridWrapper"),
      gridOptions
    );

    // sets placement based on data in state
    for (let i = 0; i < constWidgets.length; i++) {
      node.id = "constWidget";
      node.content = String(this.state.constWidgets[i].name);
      node.x = constWidgets[i].x;
      node.y = constWidgets[i].y;
      node.w = constWidgets[i].w;
      node.h = constWidgets[i].h;
      // options
      node.noResize = true;
      node.locked = true;
      node.noMove = true;
      this.grid.addWidget(node);
    }

    this.handleGrid();
  };

  initCarGrid = (newNode) => {
    // initialised grid based off data in state
    const { constWidgetCar, carOptions } = this.state;
    let node = {};

    // adds grid to the element with the id gridWrapper
    this.carGrid = GridStack.addGrid(
      document.getElementById("carGridWrapper"),
      carOptions
    );

    if (newNode) {
      node = {
        // initialise node based on newNode properties
        content: newNode.content,
        id: newNode.content,
        x: newNode.x,
        y: newNode.y,
        w: newNode.w,
        h: newNode.w,
        noResize: true,
        locked: true,
        noMove: false,
      };
      this.carGrid.addWidget(node);
      return;
    } else {
      // sets placement based on data in state
      for (let i = 0; i < constWidgetCar.length; i++) {
        node.id = node.content = String(this.state.constWidgetCar[i].name);
        node.x = constWidgetCar[i].x;
        node.y = constWidgetCar[i].y;
        node.w = constWidgetCar[i].w;
        node.h = constWidgetCar[i].h;
        // options
        node.noResize = true;
        node.locked = true;
        node.noMove = false;
        this.carGrid.addWidget(node);
      }
    }

    this.handleCarGrid();
  };

  handleGrid = () => {
    this.grid.on("added removed dropped change dragstop", () => {
      this.updateGridState();
    });
  };

  handleCarGrid = () => {
    this.carGrid.on("removed", (e, item) => {
      this.initCarGrid(item[0]);
    });
  };

  updateGridState = () => {
    const grid = this.grid.getGridItems();
    let gridItemArray = [];

    for (let i = 0; i < grid.length; i++) {
      let gridItem = {
        content: grid[i].gridstackNode.content,
        x: grid[i].gridstackNode.x,
        y: grid[i].gridstackNode.y,
        w: grid[i].gridstackNode.w,
        h: grid[i].gridstackNode.h,
        noResize: true,
        locked: true,
        noMove: false,
      };
      gridItemArray.push(gridItem);
    }

    this.setState(
      {
        addedWidgets: gridItemArray,
      },
      () => {
        console.log(this.state);
      }
    );
    
  };

  clearGrid = () => {
    this.grid.removeAll();
    this.initGrid(); // reinitialise grid
  };

  componentDidMount() {
    this.initGrid();
    this.initCarGrid();
  }

  render() {
    return (
      <div>
        <Styles.MainGridStyles className="mainGridDiv">
          <div className="gridContainer">
            <section
              id="gridWrapper"
              className="grid-stack grid-stack-N"
            ></section>
            <section
              id="carGridWrapper"
              className="grid-stack grid-stack-N"
            ></section>
          </div>
        </Styles.MainGridStyles>
        <Styles.ButtonStyles>
          <SaveButton
            addedWidgets={this.state.addedWidgets}
          ></SaveButton>
          <DeleteButton
            onClick={this.clearGrid}
            text="Clear Widgets"
          ></DeleteButton>
        </Styles.ButtonStyles>
      </div>
    );
  }
}

export default Grid;
