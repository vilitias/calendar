import React, { useState, useEffect } from "react";
import "./App.css";
import "./callbacks.js";

const days = Array.from(Array(30).keys()).map((i) => i + 1);
const urlSet = "http://192.168.1.36:2000/setState";
const urlGet = "http://192.168.1.36:2000/getState";

function App() {
  const [checkedCells, setCheckedCells] = useState([]);

  useEffect(() => {
    fetch(urlGet, {
      method: "GET",
    });
  })
    .then((res) => res.json())
    .then((response) => {
      setCheckedCells(response.bibizyaka);
    });
  // const [checkedCells, setCheckedCells] = useState(
  //   JSON.parse(localStorage.getItem("cellsSaved")) || []
  // ); - how it was was localStorage saving

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
            fetch(urlSet, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                bubu: "newListOfCheckedCells",
                bibizyaka: newListOfCheckedCells,
              }),
            });
            // localStorage.setItem(
            //   "cellsSaved",
            //   JSON.stringify(newListOfCheckedCells)
            // );
          }

          const isCheckedDay = checkedCells.includes(day); // проверяет наличие элемента в массиве. возвращает буль

          return (
            <button
              key={day}
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
