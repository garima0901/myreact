import React, { useState }  from 'react';

export default function Count(){
    const[num,setNum]=useState(5)
        function Inc(){
            setNum(num+1)
         
        }
        function Dec(){
            setNum(num-1)
         
        }
        
            return(
                <>
        
        
        <button onClick={Inc}>click here</button>
        <div>{num}</div>
        <button onClick={Dec}>click here</button>
        </>
           
        );
        
}
    
  
