// import { useState } from 'react';
import Input from './components/Input/Input';
import './App.css';
import Toast from './components/Toast/Toast';

function App() {
  // const [value, setValue] = useState('');

  return (
    <>
      {/*I don't really understand how that component suppose to work so i made
      it the way the component save value inside. But if it shouldn't i comment parts 
      for that exact case, but it's working weird and it won'y work without 'value' prop .*/}
      <Input
        value="123"
        type={'password'}
        clearable={false}
        // onChange={setValue}
        autocomplete="off"
      />
      <Toast
        status="error"
        message="yellow there"
        duration={5000}
        closable={true}
      ></Toast>
    </>
  );
}

export default App;
