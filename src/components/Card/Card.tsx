import React from 'react';

import './Card.css';

export interface CardProps {
  imageUrl?: string;
  videoUrl?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, imageUrl, videoUrl, className }) => {
  return (
    <div className={BEM()}>
      {renderCover()}
      <div className="card__body">{children}</div>
    </div>
  );

  function renderCover() {
    if (videoUrl) {
      return (
        <div className="card__cover">
          <video autoPlay loop>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>
      );
    }

    if (imageUrl) {
      return (
        <div className="card__cover">
          <img src={imageUrl} alt="" />
        </div>
      );
    }
  }

  function BEM() {
    const classArray = ['card'];

    if (className) {
      classArray.push(className);
    }

    return classArray.join(' ');
  }
};

export default Card;
