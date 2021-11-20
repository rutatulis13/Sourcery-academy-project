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

export { getCurrentWeekDay, getCurrentDay, getCurrentMonth };
