import css from './Input.module.css';
import { useState } from 'react';
import eyeOpenIcon from '../../icons/eye.svg';
import eyeClosedIcon from '../../icons/eye-blocked.svg';
import cross from '../../icons/cross.svg';

type Input = {
  type: 'text' | 'number' | 'password';
  // onChange: (value: string) => void;
  clearable?: boolean;
  value?: string;
  placeholder?: string;
  autocomplete: 'on' | 'off';
};

function Input(props: Input) {
  const [inputType, setInputType] = useState(props.type);
  const [inputValue, setInputValue] = useState(props.value ?? '');
  return (
    <form className={css.Form}>
      <input
        className={css.Form_input}
        type={inputType}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={e => {
          setInputValue(e.target.value);
          // onChange={e => {
          //   props.onChange(e.target.value);
        }}
        autoComplete={props.autocomplete}
      />
      {/* Clear button another way if i shouldn`t save value in component
      {props.clearable === true && (
        <button
          type="button"
          className={css.clearer_button}
          onClick={() => {
            props.onChange('');
          }}
        >
          <img src={cross} alt="" />
        </button>
      )} */}
      {/* Clear button the old way with value in setState */}
      <div
        className={
          props.clearable === true && props.type === 'password'
            ? css.ButtonsTwo
            : ''
        }
      >
        {props.clearable === true && (
          <button
            type="button"
            className={css.Clearer_button}
            onClick={() => {
              setInputValue('');
            }}
          >
            <img src={cross} alt="" />
          </button>
        )}

        {/* Password toggle */}
        {props.type === 'password' && (
          <button
            className={css.Password_button}
            type="button"
            onClick={() => {
              return inputType === 'password'
                ? setInputType('text')
                : setInputType('password');
            }}
          >
            <img
              src={inputType === 'password' ? eyeOpenIcon : eyeClosedIcon}
              alt="password visibility"
            />
          </button>
        )}
      </div>
    </form>
  );
}

export default Input;
