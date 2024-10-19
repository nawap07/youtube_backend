import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);

    function doubleValue(num){
  
        // for(let i=1;i<=1000000000;i++){

        // }
        return num*10;
        
    }

    const value=doubleValue(8);
    
 
    return (
        <div>
            <button onClick={ ()=>setCount(count+1)}>Count {count} {value}</button>
        </div>
    )
}

export default Memo