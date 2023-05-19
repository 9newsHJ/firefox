import React, { useState } from "react";

function Ticket_SelectBox() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      <option value="">인원 수</option>
      <option value="num_1"> 1</option>
      <option value="num_2"> 2</option>
      <option value="num_3"> 3</option>
      <option value="num_4"> 4</option>
      <option value="num_5"> 5</option>
      <option value="num_6"> 6</option>
      <option value="num_7"> 7</option>
      <option value="num_8"> 8</option>
      <option value="num_9"> 9</option>
    </select>
  );
}

export default Ticket_SelectBox;
