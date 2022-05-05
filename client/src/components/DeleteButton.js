import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";

// styling
import Styles from "./styles/Styles";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDeletePopup: false,
    };
    this.togglePopup = this.togglePopup.bind(this);
  }

  togglePopup = () => {
    if (this.state.displayDeletePopup === true) {
      this.setState({
        displayDeletePopup: false,
      });
    } else {
      this.setState({
        displayDeletePopup: true,
      });
    }
  };
  /* returns button that on click handles delete in Schedule List
   sends id from props.id */
  render() {
    const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />;
    return (
      <>
        <Styles.DeleteButtonStyles>
          <button onClick={this.togglePopup}>{deleteIcon}</button>
        </Styles.DeleteButtonStyles>
        {/*ternary operator to check whether or not popup should
            be displayed */}
        {this.state.displayDeletePopup ? (
          <Styles.DeleteConfirmationPopupStyles>
            <div className="deletePopupBox">
              <div className="deleteBox">
                <h1> Are you sure you want to delete this schedule?</h1>
                <h2>
                  <a> Warning: </a> You will not be able to retrieve this
                  schedule once it has been deleted - It's gone forever!
                </h2>
                <div className="confirmDeleteButtons">
                  <button
                    className="confirmDeleteButton"
                    onClick={() => this.props.handleDelete(this.props.id)}
                  >
                    Yes, into the void!
                  </button>
                  <button
                    className="rejectDeleteButton"
                    onClick={this.togglePopup}
                  >
                    No, take me back
                  </button>
                </div>
              </div>
            </div>
          </Styles.DeleteConfirmationPopupStyles>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default DeleteButton;
