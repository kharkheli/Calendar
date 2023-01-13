import React from "react";
import { generateDays } from "./functions";
import { CalendarBody, CalendarDay } from "./style.calendar";

export default function Dates({ month }) {
  const days = generateDays(month);
  return (
    <CalendarBody>
      {days.map((day, index) => (
        <CalendarDay key={index} isHoliday={!!day && day.isHoliday}>
          {day && day.value}
        </CalendarDay>
      ))}
    </CalendarBody>
  );
}
