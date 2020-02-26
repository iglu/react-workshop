import React from 'react';
import Icon from '@material-ui/core/Icon';
import { NavLink, NavLinkProps } from 'react-router-dom';

import './NavLinkButton.css';

interface NavLinkButtonProps extends NavLinkProps {
  icon?: string;
  variant?: 'primary';
}

const NavLinkButton: React.FC<NavLinkButtonProps> = ({ icon, variant = 'link', className, children, ...props }) => {
  return (
    <NavLink {...props} className={BEM()} activeClassName="nav-link-button--selected">
      {renderContents()}
    </NavLink>
  );

  function renderContents() {
    return (
      <>
        <span className="button__icon">
          <Icon>{icon}</Icon>
        </span>
        <span className="button__label">{children}</span>
      </>
    );
  }

  function BEM() {
    const classArray = ['nav-link-button'];

    classArray.push(`nav-link-button--${variant}`);

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  }
};

export default NavLinkButton;
