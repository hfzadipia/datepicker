import { Box, Paper, Grid, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import { RowingTwoTone } from "@material-ui/icons";
import DateIndicator from "./DateIndicator";
import { presetDateTracker } from "../../utils/date";

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  paper: {
    width: 480,
    height: 498,
    paddingTop: 16,
    borderRadius: 8,
    border: "solid 2px #000000",
    background: "#ffffff"
  },
  msg: {
    width: 368,
    height: 36,
    borderRadius: 4,
    background: "#f1f1f2",
    borderLeft: "solid 4px #000000"
  },
  titleMonth: {
    background: "#f1f1f2",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 16,
    marginBottom: 16,
    fontWeight: "bold"
  },
  weekDays: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end",
    alignItems: "flex-end"
  },
  weekDay: {
    padding: 4
  }
}));

const WeekdayIndicator = () => {
  const classes = useStyles();
  const weekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const weekDays = weekdays.map((day, key) => {
    return (
      <div className={classes.weekDay} key={key}>
        {day}
      </div>
    );
  });
  return <Grid className={classes.weekDays}>{weekDays}</Grid>;
};

const Calendar = pickDate => {
  const classes = useStyles();
  const presetActiveDates = useRef(presetDateTracker(null || []));
  const [selectDate, setSelectDate] = useState(pickDate);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            className={classes.msg}
          >
            <InfoIcon />
            <Typography variant="caption" display="block">
              Verás las citas disponibles de los próximos 30 días.
            </Typography>
          </Grid>
          <Grid item className={classes.titleMonth}>
            <Typography variant="span" component="body" align="center">
              Agosto 2021
            </Typography>
          </Grid>
          <WeekdayIndicator></WeekdayIndicator>
          <DateIndicator
            activeDates={presetActiveDates.current}
            selectDate={selectDate}
            setSelectDate={setSelectDate}
          ></DateIndicator>
          <Grid item className={classes.titleMonth}>
            <Typography variant="span" component="body" align="center">
              Septiembre 2021
            </Typography>
          </Grid>
          <Grid item>
            <WeekdayIndicator></WeekdayIndicator>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Calendar;
