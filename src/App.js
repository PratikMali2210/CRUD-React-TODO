import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'
import ToDoFuncComp from './components/ToDoFuncComp'
import ToDoClassComp from './components/ToDoClassComp';

function App() {
  return (
    <div className="App">
      <ToDo/>
      <br/>
      <hr/>
      <br/>
      <ToDoClassComp/>
      <hr/>
      <ToDoFuncComp/>
    </div>
  );
}

export default App;
