import css from './Input.module.css';
import { useState } from 'react';
import eyeOpenIcon from '../../icons/eye.svg';
import eyeClosedIcon from '../../icons/eye-blocked.svg';
import cross from '../../icons/cross.svg';

type Inpute = {
  type: 'text' | 'number' | 'password';
  clearable?: boolean;
  value?: string;
  placeholder?: string;
  autocomplete: 'on' | 'off';
};

function Input(props: Inpute) {
  const [inputType, setInputeType] = useState(props.type);
  // const handleClick = e => {
  //   e.preventDefault();
  //   onSubmit(e.currentTarget.elements.name.value);
  // };

  return (
    <form className={css.SearchForm}>
      <input
        className={css.SearchForm_input}
        type={inputType}
        placeholder={props.placeholder}
        value={props.value}
      />
      {/* Clear button */}
      {props.clearable === true && (
        <button
          type="button"
          className={css.SearchForm_button}
          onClick={() => {}}
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
