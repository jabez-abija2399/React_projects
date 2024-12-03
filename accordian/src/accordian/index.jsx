import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100  ">
      <div className="accordion w-50 bg-success" id="accordionExample">
        {data.map((item) => (
          <div className="accordion-item " key={item.id}>
            <h2 className="accordion-header " id={`heading${item.id}`}>
              <button
                className={`accordion-button ${
                  selected === item.id ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => handleSingleSelection(item.id)}
                aria-expanded={selected === item.id ? "true" : "false"}
                aria-controls={`collapse${item.id}`}
                style={{
                  backgroundColor: selected === item.id ? "#007bff" : "#f8f9fa", // Active and inactive background
                  color: selected === item.id ? "#fff" : "#000", // Active and inactive text color
                }}
              >
                {item.question}
              </button>
            </h2>

            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${
                selected === item.id ? "show" : ""
              }`}
              aria-labelledby={`heading${item.id}`}
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body "
                style={{
                  backgroundColor: "#f1f1f1", // Background color for accordion body
                  color: "#333", // Text color for accordion body
                }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
