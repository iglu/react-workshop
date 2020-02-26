import React from 'react';

import './ColorBox.css';

export interface ColorBoxProps {
  height?: number;
}

const ColorBox: React.FC<ColorBoxProps> = ({ height, children }) => {
  const [backgroundColor, setBackgroundColor] = React.useState(getRandomColor());

  return (
    <div className="color-box" style={{ backgroundColor, height }} onClick={handleOnClick}>
      {children}
    </div>
  );

  function handleOnClick() {
    setBackgroundColor(getRandomColor());
  }

  function getRandomColor() {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  }
};

export default ColorBox;

/* ES6 Features you can use here
 ** Arrow functions (url: )
 ** Arrow functions (url: )
 */
