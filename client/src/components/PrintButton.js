import React, { Component } from "react";

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
      <div>
        <button onClick = {this.savePage}>Save PDF</button>
      </div>
    );
  }
}

export default PrintButton;
