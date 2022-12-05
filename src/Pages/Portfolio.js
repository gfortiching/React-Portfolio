import { useState } from "react"

export default function Portfolio() {

    const numArray = [1, 2, 3 , 4 , 5]

    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <section className="portfolioPage mb-5">
                <h1>This is my Portfolio Page.</h1>
            </section>
            <section className="text-center mb-5">
                <h2 className=" mb-4">These numbers are printed using an array object and map method. </h2>
                <div className="d-flex gap-5 justify-content-center">{numArray.map(num => <h3> {num * 5} </h3>)}</div>
            </section>
            <section className="countSection p-5">
            <h2 className="mb-5">Here, I used useState to set increment and decrement count.</h2>
                <div className="d-flex flex-row justify-content-center gap-3">
                    <button onClick={decrementCount}>-</button>
                    <span>{count}</span>
                    <button onClick={incrementCount}>+</button>
                </div>
            </section>
        </div>
    )
}