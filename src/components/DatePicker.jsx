import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { InputAdornment } from "@material-ui/core";
import DateRangeIcon from "@material-ui/icons/DateRange";
import moment from "moment";
import { DATE_FORMAT_Y_M_D } from "../utils/string";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const DatePicker = () => {
  const classes = useStyles();

  const [pickedDate, setPickedDate] = useState(moment(new Date()));
  const handleChangeDate = event => {
    setPickedDate(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={classes.root}>
      <TextField
        className={classes.margin}
        id="date"
        label="Selecciona fecha"
        variant="outlined"
        type="date"
        value={pickedDate}
        onChange={handleChangeDate}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          min: moment().format(DATE_FORMAT_Y_M_D),
          max: moment()
            .add(30, "days")
            .format(DATE_FORMAT_Y_M_D)
        }}
      />
      <br />
    </div>
  );
};

export default DatePicker;
