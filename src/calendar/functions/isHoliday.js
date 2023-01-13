import { holidays } from "../data";

const holidaysToDate = holidays.map((holiday) => new Date(holiday));

const isHoliday = (date) => {
  if (date === null) return false;
  const day = date.getDay();
  if (day === 0 || day === 6) {
    return true;
  }
  if (holidaysToDate.find((holiday) => holiday.getTime() === date.getTime())) {
    return true;
  }
  return false;
};

export default isHoliday;
