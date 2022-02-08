import React, { Component } from "react";

import { GridStack } from "gridstack";
import "gridstack/dist/gridstack.css";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack-extra.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      items: this.props.items,
    };
    this.initGrid = this.initGrid.bind(this);
  }
  
  initGrid = () => {
    const options = this.state.options;
    this.grid = GridStack.addGrid(document.getElementById("gridWrapper"),options);

    // renders initial items in state and sets id as name
    const items = this.state.items; // array
    const node = {};

    // sets placement based on data in state
    for (let i = 0; i < items.length; i++) {

      node.content = String(this.state.items[i].name);
      node.x = items[i].x;
      node.y = items[i].y;
      node.w = items[i].w;
      node.h = items[i].h;

      node.noResize = true;
      node.locked = true;
      node.noMove = true;
      this.grid.addWidget(node);
    }
    
        console.log(node);
  }
  

  componentDidMount() {
    this.initGrid();
  }

  render() {
    return <div>
      <section id = "gridWrapper" className="grid-stack grid-stack-N"></section>
    </div>;
  }
}

export default Grid