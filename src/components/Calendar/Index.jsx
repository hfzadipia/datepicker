import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Calendar from "./Calendar";
import DateSelector from "./DateSelector";
import moment from "moment";

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "center"
  }
}));

const CalendarPicker = () => {
  const date = moment(new Date());
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <DateSelector></DateSelector>
      <Calendar pickDate={date}></Calendar>
    </div>
  );
};

export default CalendarPicker;
