import React, { Component } from "react";

//gridstack imports
import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      constWidgets: this.props.constWidgets,
    };
    this.initGrid = this.initGrid.bind(this);
    this.initCarGrid = this.initCarGrid.bind(this);
  }

  initGrid = () => {
    // initialised grid based off data in state
    const { options, constWidgets } = this.state;
    const node = {};

    // adds grid to the element with the id gridWrapper
    this.grid = GridStack.addGrid(
      document.getElementById("gridWrapper"),
      options
    );

    // sets placement based on data in state
    for (let i = 0; i < constWidgets.length; i++) {
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
  };

  initCarGrid = () => {
    // initialised grid based off data in state
    const { options, constWidgets } = this.state;
    const node = {};

    // adds grid to the element with the id gridWrapper
    this.grid = GridStack.addGrid(
      document.getElementById("gridWrapper"),
      options
    );

    // sets placement based on data in state
    for (let i = 0; i < constWidgets.length; i++) {
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
  };

  componentDidMount() {
    this.initGrid();
  }

  render() {
    return (
      <div className="gridContainer">
        <section id="gridWrapper" className="grid-stack grid-stack-N"></section>
      </div>
    );
  }
}

export default Grid;
