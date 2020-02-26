import React from 'react';
import Icon from '@material-ui/core/Icon';

import './Alert.css';

export interface AlertProps {
  icon: string;
}

const Alert: React.FC<AlertProps> = ({ children, icon }) => {
  return (
    <div className="alert">
      <Icon className="alert__icon">{icon}</Icon>
      <div className="alert__message">{children}</div>
    </div>
  );
};

export default Alert;
