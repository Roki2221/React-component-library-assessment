import React from 'react';
import { useEffect, useState } from 'react';
import css from './Toast.module.css';
import cross from '../../icons/cross.svg';

interface Toast {
  status: 'success' | 'error' | 'info';
  message: string;
  duration: number;
  closable: boolean;
}

function Toast(props: Toast) {
  const [visibility, setVisibility] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibility(false);
    }, props.duration);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  console.log(props.message);
  return (
    <div
      className={`${css.toast} ${css[props.status]} ${visibility ? css.show : css.hide}`}
    >
      <span>{props.message}</span>
      {props.closable && (
        <button
          className={css.button_close}
          onClick={() => {
            setVisibility(false);
          }}
        >
          <img src={cross} alt="close the toast" />
        </button>
      )}
    </div>
  );
}

export default Toast;
