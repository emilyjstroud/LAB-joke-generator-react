import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Jokes({ title }) {
  const [joke, setJoke] = useState(0);

  const handleClick = () => {
    setJoke((prevState) => prevState);
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{joke}</h2>
      <button type="button" onClick={handleClick}>Get a Punchline</button>
    </>
  );
}

Jokes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Jokes;
