import { useState } from "react";

function Contador() {
    const [count, setCounter] = useState(0);
    
    return (
        <section className="container">
            <h1>{count}</h1>
            <button onClick={setCounter(count +1)}>Click!</button>
        </section>
    );
}

export default Contador;