import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

const handleSingleSelection = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
}

  return (
    <div>
      <div className="accordian">
        {data.map((item) => (
          <div className="item">
            <div className="title" onClick={() => handleSingleSelection(item.id)}>
              <h2>{item.question}</h2>
              <span>{selected === item.id ? "-" : "+"}</span>
            </div>
            {selected === item.id && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
