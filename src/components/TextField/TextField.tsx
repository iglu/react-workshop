import React from 'react';
import Icon from '@material-ui/core/Icon';

import './TextField.css';

export interface TextFieldProps {
  icon?: string;
}

const TextField: React.FC<TextFieldProps> = ({ icon, children }) => {
  return (
    <div className="text-field">
      <input className="text-field__input" type="text" placeholder="Search for posts, members etc." />
      {!!icon && (
        <div className="text-field__icon">
          <Icon>{icon}</Icon>
        </div>
      )}
    </div>
  );
};

export default TextField;
