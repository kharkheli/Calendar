import isHoliday from "./isHoliday";

const year = 2023;

const getNumberOfDays = (month) => {
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 1);
  const diff = end - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

const generateEmptyDays = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array.push(null);
  }
  return array;
};

const generateDays = (month) => {
  const days = [...generateEmptyDays(new Date(year, month, 0).getDay())];
  const numberOfDays = getNumberOfDays(month);
  for (let i = 1; i <= numberOfDays; i++) {
    days.push({ value: i, isHoliday: isHoliday(new Date(year, month, i)) });
  }
  return days;
};

export default generateDays;
