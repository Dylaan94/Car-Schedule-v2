import Styles from "./styles/Styles";

const HowToUse = () => {
  return (
    <Styles.HowToUseStyles>
      <div className="howToContainer">
        <h1> How to use Onomichi BOE Car Schedule</h1>
        <ul>
          <li>
            Set date by clicking 'select date range' at the top of the screen
          </li>
          <li>Drag car widgets from the right onto the schedule grid</li>
          <li>Click widgets to edit car name/ number etc. (in progress)</li>
          <li>Click Save Schedule and confirm to save to database</li>
        </ul>
        <h2>Printing Schedules</h2>
        <ul>
          <li>
            'Save PDF' in the top left will bring up a print dialog for the
            current schedule
          </li>
          <li>
            If you would like to print previous schedules, select in the sidebar
            on the left. This will add the widgets to the grid, and then press
            'Save PDF' as normal
          </li>
        </ul>
        <h2>Edits</h2>
        <ul>
          <li>
            If you would like to make any changes, e.g names, additional car
            widgets etc., please get in touch directly and I will add it to the
            todo list!
          </li>
        </ul>
      </div>
    </Styles.HowToUseStyles>
  );
};

export default HowToUse;
