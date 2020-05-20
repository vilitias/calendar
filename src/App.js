import React, { useState } from "react";
import "./App.css";

const days = Array.from(Array(31).keys()).map((i) => i + 1);

function App() {
  console.log(days);
  const [checkedCells, setCheckedCells] = useState(
    JSON.parse(localStorage.getItem("cellsSaved")) || []
  );
  console.log(checkedCells);

  return (
    <div className="main">
      <div className="header">calendar of programming for Jul, YAY</div>
      <div>
        {days.map((day) => {
          function checked() {
            const isIncludedinList = checkedCells.includes(day);

            const newListOfCheckedCells = isIncludedinList
              ? checkedCells.filter((item) => {
                  return item !== day;
                }) // () => {body} - эт функция
              : [...checkedCells, day];
            setCheckedCells(newListOfCheckedCells); //[] - creates an array; ...  - destructuring and existing array; ...[existing array], new element
            localStorage.setItem(
              "cellsSaved",
              JSON.stringify(newListOfCheckedCells)
            );
          }
          const isCheckedDay = checkedCells.includes(day); // проверяет наличие елемента в массиве. возвращает буль
          return (
            <button
              className={`cell ${isCheckedDay ? "checked" : ""}`}
              onClick={checked}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
