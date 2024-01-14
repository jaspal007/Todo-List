import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const ItemList = ({
  items,
  handleCheck,
  deleteItem,
}) => {
  return (
    <div>
      {items.length ? (
          <ul>
            {items.map((item) => (
              <li className="item" key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                />
                <label
                  style={{
                    textDecoration: item.checked ? "line-through" : null,
                  }}
                  onClick={() => handleCheck(item.id)}
                >
                  {item.item}
                </label>
                <FaTrashAlt role="button" onClick={() => deleteItem(item.id)} />
              </li>
            ))}
          </ul>
      ) : (
          <h1 style={{ textAlign: "center" }}>No item to display</h1>
      )}
    </div>
  );
};

export default ItemList;
