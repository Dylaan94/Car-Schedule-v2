const { Component } = require("react");

class SchedulesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  };

  componentDidMount() {
    this.loadList();
  }

  render() {
    return <div>this is a list</div>;
  }
}

export default SchedulesList;
