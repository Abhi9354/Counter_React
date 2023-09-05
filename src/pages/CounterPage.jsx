import React from "react"
import { Button } from "../Components/Button"
import { Message } from "../Components/Message"
import { useState } from "react"
export const CounterPage = ()=>{
    //let count = 0;
  const[count,setCount] = useState(0);
    const logic=(buttonValue)=>{
       if(buttonValue==="+") {
        //count++;
        setCount(count+1);
    }
    else{if(count!==0){
        setCount(count-1);
    }
   }
     console.log('count is ',count);
    }
   return <div className="container">
        <Message className="info" value="CounterApp"/>
        <Message className= "success"value= "count value is " countValue={count}/>
        <Button fn={logic} className= "success" value = "-"/> 
        &nbsp;
        &nbsp;
        <Button fn={logic} className="danger" value = "+"/>
    </div>
}