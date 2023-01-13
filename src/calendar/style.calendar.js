import styled from "styled-components";

export const CalendarContainer = styled.div`
  background-color: #e4e0de;
  margin: 10px auto;
  width: 530px;
`;

export const CalendarHeader = styled.div``;

export const MonthHeader = styled.h3`
  font-weight: 1000;
  font-size: 35px;
  text-align: right;
  font-family: "Georgian";
  color: #1d4566;
  padding: 10px 25px 10px 0px;
`;

export const WeekHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 0px 0px;
`;

export const WeekDay = styled.div`
  text-align: center;
  color: #1d4566;
  font-size: 20px;
  &:nth-child(6) {
    color: #ff541c;
  }
  &:nth-child(7) {
    color: #ff541c;
  }
`;

export const LineSeparator = styled.div`
  height: 1px;
  margin: 10px 0 14px 0;
  background: rgb(190, 193, 199);
  background: linear-gradient(
    90deg,
    rgba(190, 193, 199, 1) 0%,
    rgba(29, 69, 102, 1) 3%,
    rgba(29, 69, 102, 1) 97%,
    rgba(190, 193, 199, 1) 100%
  );
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 0px 0px;
`;

export const CalendarDay = styled.div`
  height: 45px;
  font-family: "Rowdies";
  text-align: center;
  font-size: 20px;
  color: ${(props) => (props.isHoliday ? "#ff541c" : "#1d4566")};
`;
