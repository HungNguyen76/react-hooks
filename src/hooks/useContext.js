import { useStore, actions } from './store';

function UseContext2() {
    const [state, dispatch] = useStore() //global state
    const {todos, todoInput} = state;
    

    const handleAdd = () => {
        dispatch(actions.addTodo(todoInput))
    }
    return (
        <div>
            <h2>Global state with Context + useReducer</h2>
            <input 
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo, index)=> (
                <li key={index}>{todo}</li>
            ))}
        </div>
    )
}
export default UseContext2