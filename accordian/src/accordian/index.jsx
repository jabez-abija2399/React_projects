import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSingleSelection = (id) => {
    setSelectedItems(selectedItems.includes(id) ? [] : [id]);
  };

  const handleMultiSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
    console.log(selectedItems);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100  ">
      <div className="accordion w-50 " id="accordionExample">
        <button
          className="btn btn-secondary active"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          {enableMultiSelection
            ? "Disable Multi-Selection"
            : "Enable Multi-Selection"}
        </button>
        {data.map((item) => (
          <div className="accordion-item bg-success" key={item.id}>
            <h2 className="accordion-header " id={`heading${item.id}`}>
              <button
                className={`accordion-button ${
                  selectedItems.includes(item.id) ? "" : "collapsed"
                }`}
                type="button"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                aria-expanded={selectedItems.includes(item.id) ? "true" : "false"}
                aria-controls={`collapse${item.id}`}
                style={{
                  backgroundColor: selectedItems.includes(item.id) ? "#007bff" : "#00f7ff", // Active and inactive background
                  color: selectedItems.includes(item.id) ? "#fff" : "#000", // Active and inactive text color
                }}
              >
                {item.question}
              </button>
            </h2>

            <div
              id={`collapse${item.id}`}
              className={`accordion-collapse collapse ${
                selectedItems.includes(item.id) ? "show" : ""
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
