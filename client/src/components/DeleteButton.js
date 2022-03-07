import { Component } from "react";

import Styles from "./styles/Styles"

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Styles.DeleteButtonStyles>
        <button onClick={this.props.clearGrid}> Delete Widgets</button>
      </Styles.DeleteButtonStyles>
    );
  }
}

export default DeleteButton;
