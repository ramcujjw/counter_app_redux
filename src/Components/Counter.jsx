import React from 'react'
import { increment, decrement } from '../action';
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    const value =useSelector(state=>state.counter)
    const dispatch =useDispatch();

  return (
    <>
    <div>
      Counter:{value}
    </div><br />
     <button onClick={()=>dispatch(increment())}> increment   </button>

   <button onClick={()=>dispatch(decrement())} > deccrement</button>
   </>
  )
}

export default Counter
