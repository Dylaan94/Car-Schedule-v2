import Styles from "./styles/Styles";

const PrintButton = () => {
  const savePage = () => {
    window.print();
  };

  return (
    <Styles.PrintButtonStyles>
      <button onClick={savePage}>Save PDF</button>
    </Styles.PrintButtonStyles>
  );
};

export default PrintButton;
