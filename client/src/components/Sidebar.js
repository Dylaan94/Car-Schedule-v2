import React, { Component } from "react";

import Styles from "./styles/Styles";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Styles.SidebarStyles>
        <div className="sidebar"></div>
      </Styles.SidebarStyles>
    );
  }
}

export default Sidebar