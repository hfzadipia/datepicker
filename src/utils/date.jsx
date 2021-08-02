const moment = require("moment");

const totalDatesPerMonthView = 30;

const getSpecificDate = (month, dayOfMonth, year) => {
  return moment(`${month}-${dayOfMonth}-${year}`, "MM-DD-YYYY").toDate();
};

const getNextMonthYear = (month, year) => {
  if (month === 12) {
    return {
      month: 1,
      year: year + 1
    };
  } else {
    return {
      month: month + 1,
      year
    };
  }
};

const getDatesInMonthDisplay = (month, year) => {
  const daysInMonth = moment(`${month}-${year}`, "MM-YYYY").daysInMonth();
  const result = [];
  const DateNow = moment(new Date()).date();

  console.log(DateNow);
  for (let j = DateNow; j <= daysInMonth; j++) {
    result.push({
      currentMonth: true,
      date: getSpecificDate(month, j, year)
    });
  }

  if (result.length < totalDatesPerMonthView) {
    const daysToAdd = totalDatesPerMonthView - result.length;
    const nextMonthYear = getNextMonthYear(month, year);
    for (let k = 1; k <= daysToAdd; k++) {
      result.push({
        currentMonth: false,
        date: getSpecificDate(nextMonthYear.month, k, nextMonthYear.year)
      });
    }
  }

  return result;
};

const presetDateTracker = dates => {
  const result = {};

  if (dates && Array.isArray(dates)) {
    dates.forEach(date => {
      const dateStr = moment(date).format("MM-DD-YYYY");

      if (!result[dateStr]) {
        result[dateStr] = 1;
      } else {
        result[dateStr] += 1;
      }
    });
  }
  return result;
};

export { getDatesInMonthDisplay, presetDateTracker };
