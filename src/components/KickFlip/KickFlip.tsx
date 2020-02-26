import React from 'react';

import './KickFlip.css';

const KickFlip = () => {
  const [showBack, setShowBack] = React.useState(false);

  return (
    <div className={BEM()} onClick={handleClick}>
      <div className="kick-flip__inner">
        <div className="kick-flip__front">
          <span>Click here</span>
        </div>
        <div className="kick-flip__back">Click here</div>
      </div>
    </div>
  );

  function handleClick() {
    setShowBack(oldState => !oldState);
  }

  function BEM() {
    const classArray = ['kick-flip'];

    if (showBack) {
      classArray.push('kick-flip--back');
    }

    return classArray.join(' ');
  }
};

export default KickFlip;
