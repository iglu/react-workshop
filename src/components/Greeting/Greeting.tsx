import React from 'react';

export interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = () => {
  return (
    <h1>
      {getWelcomeText()}, <strong>Member</strong>
    </h1>
  );

  function getWelcomeText(): string {
    var d = new Date();
    var time = d.getHours();

    if (time < 12) {
      return 'Good morning';
    }
    if (time < 17) {
      return 'Good afternoon';
    }

    return 'Good Evening';
  }
};

export default Greeting;
