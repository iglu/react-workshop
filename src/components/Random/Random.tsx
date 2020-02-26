import React, {useEffect} from 'react';

import './Random.css';

const Random = () => {
  const [random, setRandom] = React.useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      const randomNumber = getRandomNumber;
      setRandom(randomNumber);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

  return (
    <div className="random" onClick={() => setRandom(getRandomNumber)}>
      {' '}
      {random}
    </div>
  );
};

export default Random;
