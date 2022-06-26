import './App.css';
import CssModule from './components';
import CSS from './hooks/css';
import Memo from './hooks/memo';
import UseContext2 from './hooks/store/useContext2';
import TodoApp from './hooks/Todo';
import ToDoList from './hooks/toDoList';
import TwoWayBinding from './hooks/twoway-binding';
import UseCallback from './hooks/useCallback';
import UseImperativeHandle from './hooks/useImperativeHandle';
// import UseContext from './hooks/useContext';
import UseEffects from './hooks/useEffects';
import UseLayoutEffect from './hooks/useLayoutEffect';
import UseMemo from './hooks/useMemo';
import UseReducer from './hooks/useReducer';
import UseRef from './hooks/useRef';
import UseStates from './hooks/useStates';
import ReactRouter from './pages';

function App() {
  return (
    <div className="App">
      <ReactRouter /> <hr />
      <CssModule /> <hr />
      <CSS /> <hr />
      <UseImperativeHandle /> <hr />
      <UseContext2 /> <hr />
      {/* <UseContext /><hr /> */}
      <TodoApp /><hr />
      <UseStates /><hr />
      <TwoWayBinding /><hr />
      <ToDoList /><hr />
      <UseEffects />
      <UseLayoutEffect /><hr />
      <UseRef /><hr />
      <Memo /><hr />
      <UseCallback /><hr />
      <UseMemo /><hr />
      <UseReducer /><hr />
    </div>
  );
}

export default App;
