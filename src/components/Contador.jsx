import { useState } from "react";

function Contador() {
    const [count, setCounter] = useState(0);
    const [i, setIndex] = useState(0);
    const text = ["Texto1", "Texto2"];

    const changeCounter = () => {
        setCounter(count + 1);
    };

    const changeText = () => {
        setIndex((previ) => (previ === 1 ? 0 : 1));
    };

    return (
        <section className="container">
            <h1>{count}</h1>
            <button onClick={changeCounter}>Contador!</button>
            <h1>{text[i]}</h1>
            <button onClick={changeText}>Click!</button>
        </section>
    );
}

export default Contador;