import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import AddItem from "./Components/AddItem";
import SearchItem from "./Components/SearchItem";
import { useState, useEffect } from "react";
import apiRequest from "./Components/apiRequest";

function App() {
  //const API_URL = "http://localhost:3600/items";
  //hooks
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(
    JSON.parse(localStorage.getItem("counter")) + 1
  );
  const [searchValue, setSearchValue] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //with useEffect an async function, its called whenever there is a change in the state of either the application or the dependencies([])
  //Its executed after the application is rendered
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("listItems")));
  }, []);

  //methods
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (response.status !== 200) throw Error("invalid URL");
  //       const listItems = await response.json();
  //       setItems(listItems);
  //     } catch (err) {
  //       setFetchError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   setTimeout(() => {
  //     fetchItems();
  //   }, 2000);
  // }, []);

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems))
    // const newItem = listItems.filter((item) => item.id === id);
    // const updateOptions = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ checked: newItem[0].checked }),
    // };

    // const requestUrl = API_URL + "/" + id;
    // const result = await apiRequest(requestUrl, updateOptions);
    // if (result) setFetchError(result);
  };

  const deleteItem = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('listItems', JSON.stringify(listItems))
    // localStorage.setItem("listItems", JSON.stringify(listItems));
    if (listItems.length === 0) {
      setCounter(1);
      localStorage.setItem("counter", JSON.stringify(0));
    }
    // const deleteOptions = {
    //   method: "DELETE",
    // };
    // const requestUrl = API_URL + "/" + id;
    // const result = await apiRequest(requestUrl, deleteOptions);
    // if (result) setFetchError(result);
  };

  const addItem = async (val) => {
    console.log("done");
    if (val === "") {
      setCounter(counter + 1);
    }
    const newItem = {
      id: items.length ? (parseInt(items[items.length - 1].id) + 1).toString() : "1",
      checked: false,
      item: val !== "" ? val : "item" + counter,
    };
    setInputValue("");
    const listItems = [...items, newItem];
    setItems(listItems);
    localStorage.setItem("listItems", JSON.stringify(listItems));
    localStorage.setItem("counter", JSON.stringify(counter));
    // const postOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newItem),
    // };

    // const result = await apiRequest(API_URL, postOptions);
    // if (result) setFetchError(result);
  };
  const handleInput = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  // const searchItem = (val) => {
  //   console.log("processing...")
  //   if (val === ""){
  //     setItems(localStorage.getItem('listItems'));
  //   }
  //   const listItems = items.filter((item) =>
  //     item.item.toLowerCase().includes(val.toLowerCase())
  //   );

  //   setItems(listItems);
  // };

  return (
    <div className="App">
      <Header title="MS Keep" />
      <AddItem
        inputValue={inputValue}
        addItem={addItem}
        handleInput={handleInput}
      />
      <SearchItem searchValue={searchValue} handleSearch={handleSearch} />
      {isLoading ? (
        <p style={{ textAlign: "center", fontWeight: "bolder" }}>
          Data is still loading...
        </p>
      ) : fetchError ? (
        <p style={{ color: "red", textAlign: "center" }}>Error: {fetchError}</p>
      ) : (
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(searchValue.toLowerCase())
          )}
          setItems={setItems}
          handleCheck={handleCheck}
          deleteItem={deleteItem}
        />
      )}
      <Footer
        length={
          items.filter((item) =>
            item.item.toLowerCase().includes(searchValue.toLowerCase())
          ).length
        }
      />
    </div>
  );
}

export default App;
