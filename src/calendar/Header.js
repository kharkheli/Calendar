import React from "react";
import {
  CalendarHeader,
  MonthHeader,
  WeekHeader,
  WeekDay,
  LineSeparator,
} from "./style.calendar";
import { days } from "./data";
import { getMonth } from "./functions";

export default function Header({ month }) {
  return (
    <CalendarHeader>
      <MonthHeader>{getMonth(month)}</MonthHeader>
      <WeekHeader>
        {days.map((day) => {
          return <WeekDay key={day}>{day}</WeekDay>;
        })}
      </WeekHeader>
      <LineSeparator></LineSeparator>
    </CalendarHeader>
  );
}
