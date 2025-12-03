import css from './Input.module.css';
import { useState } from 'react';
import eyeOpenIcon from '../../icons/eye.svg';
import eyeClosedIcon from '../../icons/eye-blocked.svg';
import cross from '../../icons/cross.svg';

type Inpute = {
  type: 'text' | 'number' | 'password';
  // onChange: (value: string) => void;
  clearable?: boolean;
  value?: string;
  placeholder?: string;
  autocomplete: 'on' | 'off';
};

function Input(props: Inpute) {
  const [inputType, setInputeType] = useState(props.type);
  const [inputValue, setInputeValue] = useState(props.value ?? '');
  return (
    <form className={css.SearchForm}>
      <input
        className={css.SearchForm_input}
        type={inputType}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={e => {
          setInputeValue(e.target.value);
          // onChange={e => {
          //   props.onChange(e.target.value);
        }}
        autoComplete={props.autocomplete}
      />
      {/* Clear button another way if i shouldn`t save value in component
      {props.clearable === true && (
        <button
          type="button"
          className={css.SearchForm_button}
          onClick={() => {
            props.onChange('');
          }}
        >
          <img src={cross} alt="" />
        </button>
      )} */}
      {/* Clear button the old way with value in setState */}
      {props.clearable === true && (
        <button
          type="button"
          className={css.SearchForm_button}
          onClick={() => {
            setInputeValue('');
          }}
        >
          <img src={cross} alt="" />
        </button>
      )}

      {/* Password toggle */}
      {props.type === 'password' && (
        <button
          type="button"
          onClick={() => {
            return inputType === 'password'
              ? setInputeType('text')
              : setInputeType('password');
          }}
        >
          <img
            src={inputType === 'password' ? eyeOpenIcon : eyeClosedIcon}
            alt="password visibility"
          />
        </button>
      )}
    </form>
  );
}

export default Input;
