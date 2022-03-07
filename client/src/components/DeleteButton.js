import { Component } from "react";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button onClick={this.props.clearGrid}> Delete Widgets</button>
      </div>
    );
  }
}

export default DeleteButton;
