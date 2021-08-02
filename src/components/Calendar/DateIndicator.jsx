import React from "react";
import moment from "moment";
import { getDatesInMonthDisplay } from "../../utils/date";

const getMonthDayYear = date => moment(date).format("MM-DD-YYYY");

const DateIndicator = ({ activeDates, selectDate, setSelectDate }) => {
  const datesInMonth = getDatesInMonthDisplay(
    moment(selectDate).month() + 1,
    moment(selectDate).year()
  );
  console.log(datesInMonth);
  const monthDates = datesInMonth.map((i, key) => {
    const selected =
      getMonthDayYear(selectDate) === getMonthDayYear(i.date) ? "selected" : "";
    const active =
      activeDates && activeDates[getMonthDayYear(i.date)] ? "active" : "";
    return (
      <div
        className={`date-icon ${selected} ${active}`}
        data-active-month={i.currentMonth}
        data-date={i.date.toString()}
        key={key}
      >
        {moment(i.date).date()}
      </div>
    );
  });

  return <div className="bae-date-indicator">{monthDates}</div>;
};

export default DateIndicator;
