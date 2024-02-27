import { useState } from "react";
import Bubble from "./Bubble";
const dropdown = [
  { id: 1, value: "Football" },
  { id: 2, value: "Cricket" },
  { id: 3, value: "Tennis" },
  { id: 4, value: "BaseBall" },
  { id: 5, value: "Hockey" },
];

const Multiselect = () => {
  const [dropdownVal, setDropdownVal] = useState(dropdown);
  const [data, setData] = useState([]);

  const dropdownHandler = (e) => {
    console.log("ev ", e.currentTarget.innerText.trim());
    const filterData = dropdownVal.filter((sport) => {
      if (sport.value !== e.currentTarget.innerText.trim()) {
        return sport;
      } else {
        setData([...data, sport]);
      }
    });
    console.log("fil ", filterData);
    setDropdownVal(filterData);
  };
  return (
    <>
      {data && <Bubble data={data} />}
      <input type="text" />
      <div>
        {dropdownVal.map((sport) => (
          <div
            key={sport.id}
            onClick={dropdownHandler}
            style={{ cursor: "pointer" }}>
            {sport.value}
          </div>
        ))}
      </div>
    </>
  );
};
export default Multiselect;
