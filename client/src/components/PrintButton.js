import React, { Component } from "react";
import Styles from "./styles/Styles"

class PrintButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.savePage = this.savePage.bind(this);
  }

  savePage = () => {
    window.print();
  };

  render() {
    return (
      <Styles.PrintButtonStyles>
        <button onClick={this.savePage}>Save PDF</button>
      </Styles.PrintButtonStyles>
    );
  }
}

export default PrintButton;
