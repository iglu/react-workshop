import React from 'react';

import './Avatar.css';

interface AvatarProps {
  name: string;
  imageUrl?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, imageUrl }) => {
  const initials = name.match(/\b\w/g) || [];
  const initialString = `${initials[0]}${initials[1]}`;

  return (
    <div className="avatar">
      <div className="avatar__inner">{renderBody()}</div>
    </div>
  );

  function renderBody() {
    if (imageUrl) {
      return <img src={imageUrl} alt={name} />;
    }

    return <div className="avatar__initials">{initialString}</div>;
  }
};

export default Avatar;
