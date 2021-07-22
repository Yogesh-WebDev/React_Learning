import React,{Fragment, useState} from 'react';
//rule-->hoooks cant called in loops ,condition,nested function
function Counter(props) {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    return (
        <Fragment>
            <div>
                <input type="text" onChange={e=>setName(e.target.value)}></input>
                { name}has clicked {count} times!
            </div>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        </Fragment>
    );
}

export default Counter;