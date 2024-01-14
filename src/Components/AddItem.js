import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ inputValue, addItem, handleInput }) => {
  return (
    <section className="sec">
      <input
        type="text"
        name="value"
        id="val"
        value={inputValue}
        onChange={handleInput}
        placeholder="Add Items"
      />
      <FaPlus
        role="button"
        onClick={() => {
          addItem(inputValue);
          inputValue = "";
        }}
      />
    </section>
  );
};

export default AddItem;
