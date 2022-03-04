import Styles from "./styles/Styles";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Date = (props) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const updateStartDate = (date) => {
    let dateArray = [date].join(" ").split(" ");
    dateArray.length = 4;
    let startDateStr = dateArray.join(" ");
    document.getElementById("startDate").innerHTML = startDateStr;
  };

  const updateEndDate = (date) => {
    let dateArray = [date].join(" ").split(" ");
    dateArray.length = 4;
    let endDateStr = dateArray.join(" ");
    document.getElementById("endDate").innerHTML = endDateStr;
  };

  const updatePlaceholder = () => {

  };

  return (
    <Styles.DateStyles>
      <div className="dateContainer">
        <p className="date" id="startDate">
          Mon Jul 26 2021
        </p>
        {/*placeholder dates*/}
        <p className="date" id="endDate">
          Fri Jul 30 2021
        </p>
      </div>
      <DatePicker
        className="datePicker"
        selected={null}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update);
        }}
        onCalendarClose={() => {
          updateStartDate(startDate);
          updateEndDate(endDate);
        }}
        withPortal
        value = "Select date range"
      />
    </Styles.DateStyles>
  );
};

export default Date;
