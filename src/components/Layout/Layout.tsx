import React from 'react';

import './Layout.css';

export interface LayoutProps {
  type?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, type }) => {
  return <div className={BEM()}>{children}</div>;

  function BEM() {
    const classArray = ['layout'];

    if (type) {
      classArray.push(`layout--${type}`);
    }

    return classArray.join(' ');
  }
};

export default Layout;
