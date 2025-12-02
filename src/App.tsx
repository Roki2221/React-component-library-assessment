// import { useState } from 'react';
import Input from './components/Input/Input';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Input type={'number'} clearable={true} autocomplete="off" />
    </>
  );
}

export default App;
