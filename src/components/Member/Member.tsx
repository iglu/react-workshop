import React from 'react';
import Avatar from '../Avatar/Avatar';
import { Member$Response } from '../../api/api';

import './Member.css';

const Member: React.FC<Member$Response> = ({ firstName, lastName, occupation, imageUrl }) => {
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="member">
      <Avatar name={fullName} imageUrl={imageUrl} />
      <h2>{fullName}</h2>
      <p>{occupation}</p>
    </div>
  );
};

export default Member;
