import Styles from "./styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const { Component } = require("react");

class SchedulesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedules: [],
    };
    this.loadList = this.loadList.bind(this);
  }

  loadList = async () => {
    const response = await fetch(`http://localhost:5000/schedules/`);

    if (!response.ok) {
      const message = `An error occured: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const schedules = await response.json();
    console.log(schedules);

    this.setState(
      {
        schedules: schedules,
      },
      () => {
        console.log(this.state.schedules);
      }
    );
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    const schedules = this.state.schedules;
    const calendarIcon = <FontAwesomeIcon icon={faCalendarDays} />;
    return (
      <Styles.SchedulesListStyles>
        <h1>Saved Schedules</h1>
        {console.log(schedules)}
        {schedules.map((item) => (
          <li key={item._id}>
            <a>{calendarIcon}</a>
            {item.schedule.startDate}
          </li>
        ))}
      </Styles.SchedulesListStyles>
    );
  }
}

export default SchedulesList;
