import Styles from "./styles/Styles";

const ClearButton = (props) => {
  return (
    <Styles.ClearButtonStyles className="clearButton">
      <button onClick={props.onClick}> {props.text}</button>
    </Styles.ClearButtonStyles>
  );
};

export default ClearButton;
