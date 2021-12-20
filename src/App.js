import React, { useState } from "react";
import Todolist from "./Todolist";


const App=() =>{

  const[inputList, setInputList] = useState("");
  const[Items, setItems] = useState([]); //changing the state each time while adding the new item or updating the array

  const itemEvent =(event) =>{
   setInputList(event.target.value);
  };  //taking the input 

  const listOfItems =() =>{
    setItems((oldItems)=> {
      return [...oldItems,inputList];
    });
    setInputList("");
  };//adding ghr array and updating the old array by adding the input list in it
  //itemmapping is for arrray
  const deleteItems =(id) =>{
    console.log("deleted");
    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) =>{
        return index !== id;
      });
    });
};
  
  return( 
    <> 
    <div className="main_div">
      <div className="center_div">
      <br/> 
      <h1>To Do list</h1>
      <br/>
      <input type="text" placeholder="Add Items"
      value={inputList} onChange={itemEvent} /> 

      <button onClick={listOfItems}> + </button>
      
      <ol>
        

        {Items.map((itemval, index) => {
         return <Todolist
          key={index}
          id={index}  
          text={itemval}
          onSelect={deleteItems}
          />;
        })};

      </ol>

      </div>
    </div>
    </>
  );
}

export default App;