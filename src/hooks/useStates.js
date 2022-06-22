import {useState} from 'react'

const UseStates = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
    }
    return (
        <div className="App" style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}
export default UseStates;