const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date().getDay();

const getCurrentWeekDay = () => {
  return weekDays[today];
};

const getCurrentDay = () => {
  return new Date().getDate();
};

const getCurrentMonth = () => {
  return monthNames[new Date().getMonth()];
};

const convertToMonSunWeekFormat = (weekDay) => {
  if (weekDay && typeof weekDay === "number" && weekDay >= 0 && weekDay <= 6) {
    return weekDay === 0 ? 6 : weekDay - 1;
  } else {
    return null;
  }
};

const convertToSunSatWeekFormat = (weekDay) => {
  if (weekDay && typeof weekDay === "number" && weekDay >= 0 && weekDay <= 6) {
    return weekDay === 6 ? 0 : weekDay + 1;
  } else {
    return null;
  }
};

const weekDayNameToNumber = (weekDayName, monSunWeekFormat = false) => {
  const result = weekDays.indexOf(weekDayName);
  return monSunWeekFormat ? convertToMonSunWeekFormat(result) : result;
};

export {
  getCurrentWeekDay,
  getCurrentDay,
  getCurrentMonth,
  convertToMonSunWeekFormat,
  convertToSunSatWeekFormat,
  weekDayNameToNumber,
};
