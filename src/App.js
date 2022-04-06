import './App.css';
import Counter from './components/Counter';
import Hover from './components/Hover';
import InputForm from './components/Input';
import Contacts from './context/Contacts';
import Form from './context/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <Contacts/>
       {/* <Counter/>
       <Hover/>
       <InputForm/> */}
      </header>
    </div>
  );
}

export default App;
