import React, {useState, useEffect} from 'react'

function Header() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('')

    
     

    return (
        <div>
            <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
           <button onClick = {() => setCount(count-1)}>Decrement</button>
     

        </div>
    )
}

export default Header
