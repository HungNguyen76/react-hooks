import './App.css';
import CssModule from './components';
import CSS from './hooks/css';
import Memo from './hooks/memo';
import UseContext from './hooks/useContext';
import TodoApp from './hooks/Todo';
import ToDoList from './hooks/toDoList';
import TwoWayBinding from './hooks/twoway-binding';
import UseCallback from './hooks/useCallback';
import UseImperativeHandle from './hooks/useImperativeHandle';
import UseEffects from './hooks/useEffects';
import UseLayoutEffect from './hooks/useLayoutEffect';
import UseMemo from './hooks/useMemo';
import UseReducer from './hooks/useReducer';
import UseRef from './hooks/useRef';
import UseStates from './hooks/useStates';
import ReactRouter from './pages';
import EnhancedObjectLiterals from './es6/enhancedObjectLiteral';
import SpreadOperator from './es6/spreadOperator';
import  ThemeContext  from './hooks/ThemeContext';

function App() {
  return (
    <div className="App">
      <EnhancedObjectLiterals /> <hr />
      <SpreadOperator /> <hr />
      <ReactRouter /> <hr />
      <CssModule /> <hr />
      <CSS /> <hr />
      <UseImperativeHandle /> <hr />
      <UseContext /> <hr />
      <ThemeContext /> <hr />
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
