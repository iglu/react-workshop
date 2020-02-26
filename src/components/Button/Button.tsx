import React from 'react';
import Icon from '@material-ui/core/Icon';

import './Button.css';

export interface ButtonProps {
  icon?: string;
  variant?: 'primary';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, icon, variant = 'link', onClick, className }) => {
  return (
    <button className={BEM()} type="button" onClick={onClick}>
      <span className="button__icon">
        <Icon>{icon}</Icon>
      </span>
      <span className="button__label">{children}</span>
    </button>
  );

  function BEM() {
    const classArray = ['button'];

    classArray.push(`button--${variant}`);

    if (className) {
        classArray.push(className);
    }

    return classArray.join(' ');
  }
};

const ButtonStarter: React.FC<ButtonProps> = () => {
  return (
    <button className="button" type="button">
      <span className="button__icon">
        <Icon>add</Icon>
      </span>
      <span className="button__label">Add new</span>
    </button>
  );
}

export default Button;
