import React, { Component } from "react";
import Styles from "./styles/Styles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Styles.HeaderStyles>
          <h1>Onomichi BOE Car Schedule</h1>
        </Styles.HeaderStyles>
      </div>
    );
  }
}

export default Header;
