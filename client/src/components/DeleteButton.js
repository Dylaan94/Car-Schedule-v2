import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

// styling

import Styles from "./styles/Styles";

const DeleteButton = (props) => {
  const deleteIcon = <FontAwesomeIcon icon={faDeleteLeft} />;

  // returns button that on click handles delete in Schedule List
  // sends id from props.id
  return (
    <Styles.DeleteButtonStyles>
      <button
        onClick={() => {
          props.handleDelete(props.id);
        }}
      >
        {deleteIcon}
      </button>
    </Styles.DeleteButtonStyles>
  );
};

export default DeleteButton;
