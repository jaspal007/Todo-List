import React from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const Content = ({
  items,
  handleCheck,
  deleteItem,
}) => {
  //hooks
  const [name, setName] = useState("jaspal");
  const [count, setCount] = useState(0);

  function getName() {
    const nameList = ["jaspal", "mike", "jas"];
    const i = Math.floor(Math.random() * 3);
    setName(nameList[i].toUpperCase());
  }
  function buttonClicked() {
    console.log("Button is clicked");
  }
  function buttonClicked2(value) {
    setCount(count + 1); //this statement will not change the value of count that will be logged into the console as the count is already in the function and will be updated outside the function
    setCount(count + 1); //so if the initial value of count is x then it will print x and both the setCount statement means the same i.e. x+1;
    console.log(count);
  }
  function buttonClickedEvent(event) {
    console.log(event.target.innerText);
  }

  return (
    <main>
      {/* <p onClick={buttonClicked}>Hello {name}!</p>
      <button onClick={getName}>Change Name!</button>
      <button onClick={() => buttonClicked2("scooby")}>Click It!</button>
      <button onClick={(event) => buttonClickedEvent(event)}>Click It!</button> */}

      <ItemList
        items={items}
        handleCheck={handleCheck}
        deleteItem={deleteItem}
      />
    </main>
  );
};

export default Content;
