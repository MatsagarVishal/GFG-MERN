import logo from './logo.svg';
import MainApp from './component/mainApp';
import Counter from './component/counter';
import './App.css';

function App() {
  const xyz=["vishal","shubham","aditya"];
  return (
    <div className="App">
      <header className="App-header">
      <MainApp hd={xyz}/>
      <Counter/>

        welcome to React
      </header>
    </div>
  );
}

export default App;
