import React from "react";
import Header from "./Header";
import { CalendarContainer } from "./style.calendar";
import CalendarBody from "./Dates";

const month = 3;

export default function Calendar() {
  return (
    <CalendarContainer>
      <Header month={month} />
      <CalendarBody month={month} />
    </CalendarContainer>
  );
}
