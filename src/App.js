import React, { useState } from "react";
import ToDoLists from "./ToDoLists";
const App = () => {
const [inputList, setInputList] = useState("")
const [items, setItems] = useState([]);

const [edit, setEdit] = useState(false)
const [newItem, setNewItem] = useState()

const itemEvenet = (event)=>{
   setInputList(event.target.value);

  }

  const listOfItems = ()=>{
  setItems((oldItems)=>{
    return [...oldItems, inputList]
    
  })
  setInputList("");
     
  }
  
  const deleteItems = (id)=>{
        console.log("delete");
        setItems((oldItems)=>{
          return oldItems.filter((arrElem,index)=>{
            return index !==id;
          })
        })
    }
    
    const editItems = (id)=>{
      console.log("edit");
      setEdit((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
          return index !==id;
        })
      })
  }
  

  return (
    <>
<div className="main_div">
<div className="center_div">
<br />

<h1> Todo App</h1>
<br />
<input type="text" placeholder="Add Items" value={inputList}  onChange={itemEvenet}/>
<button onClick={listOfItems}>Add Todo</button>

<ol>
  {/* <li> {inputList} </li> */}
  

   {items.map((itemval,index) => {
    
          return (<ToDoLists 
          key={index}
          id={index} 
          text =  {itemval}
            onSelect = {deleteItems}
          />
        
    )
  })}
  {items.map((itemval,index) => {
    
    return (<ToDoLists 
    key={index}
    id={index} 
    text =  {itemval}
      onSelect = {editItems}
    />
  
)
})}
  

</ol>
</div> 
</div>
    </>
  );
}

export default App;
