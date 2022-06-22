import { useReducer} from 'react'

//useState
//1. initState: 0
//2. Actions: Up (state + 1) / Down (state - 1)

//useReducer
//1. initState: 0
//2. Actions: Up (state + 1) / Down (state - 1)
//3. Reducer
//4. Dispatch

//Init state
const initState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {
    switch(action) {
        case UP_ACTION: 
            return state + 1
        case DOWN_ACTION: 
            return state - 1
        default: 
            throw new Error('Invalid action')
    }
}
const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState)
    return (
        <div style={{padding: '0 20px'}}>
            <h1>Use reducer</h1>
            <h1>{count}</h1>
            <button
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>
    )
}
export default UseReducer;