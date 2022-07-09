import React, { useEffect, useReducer, useState } from 'react'
// import { createStore } from 'redux';

const reducer=(state,action)=>{
      switch(action.type){
        case "Increment":
          return {count:state.count+1,text:state.text};
        case "toggle":
          return {count:state.count,text:!state.text};
        default:
          return state
      }
}

//Redux

// // Actions
// const increment=()=>{
//   return{
//     type:"INCREMENT"
//   }}
// const decrement=()=>{return{
//   type:"DECREMENT"
// }}

// // Reducer
// const counter=(state=0,action)=>{
//   switch (action.type){
//     case "INCREMENT": 
//       return state+1;
  
//     case "DECREMENT": 
//       return state-1;
//   } 
// }
// //Store
// let store=configureStore(counter)

const Practise = () => {
    const [number, setnumber] = useState();
    const [state, dispatch] = useReducer(reducer,{count:0,text:true});


    const handlechange=(e)=>{
        console.log(e.target.value);
        if(!isNaN(Number(e.target.value))){
            setnumber(e.target.value);
        }
    }

    useEffect(()=>{
      console.log("hello");
    },[]);

  return (
    <>
        <div>Practise</div>
        <label >Phone no:</label>
        <input type="text" value={number} onChange={(e)=>handlechange(e)}/>
        

        <h2>{state.count}</h2>
        <button onClick={()=>{
            dispatch({type:"toggle"})
            dispatch({type:"Increment"})
        }
          
        }>Click</button>
        {state.text && <p>this is the text</p>}



    </>

  )
}

export default Practise