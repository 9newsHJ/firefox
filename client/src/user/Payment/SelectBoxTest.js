import React, { useState } from "react";
import { seat } from "./Seat";

function SelectBox() {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const { seatGrade, seatName, seatNum } = seat;

  return (
    <div>
      <select onChange={(e) => setVal1(e.target.value)}>
        <option value="">선택</option>
        {seatGrade.map((el) => {
          return (
            <option key={el.seatGrade} value={el.seatGrade}>
              {el.codNm}
            </option>
          );
        })}
      </select>
      <select onChange={(e) => setVal2(e.target.value)}>
        <option value="">선택</option>
        {seatName
          .filter((el) => el.seatGrade === val1)
          .map((el) => (
            <option key={el.seatName} value={el.seatName}>
              {el.codNm}
            </option>
          ))}
      </select>
      <select onChange={(e) => setVal3(e.target.value)}>
        <option value="">선택</option>
        {seatNum
          .filter((el) => el.seatGrade === val1 && el.seatName === val2)
          .map((el) => (
            <option key={el.seatNum} value={el.seatNum}>
              {el.codNm}
            </option>
          ))}
      </select>
    </div>
  );
}
export default SelectBox;
