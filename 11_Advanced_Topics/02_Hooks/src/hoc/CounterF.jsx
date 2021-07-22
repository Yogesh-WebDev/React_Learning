import { useState,Fragment } from "react";

function Counter2(props) {
    const [count, setCount] = useState(0);
     return (<Fragment>
            <div>Count:{this.state.count}</div>
         <button onClick={()=>setCount(count+1)}>Increase</button>
        </Fragment>);
    
}