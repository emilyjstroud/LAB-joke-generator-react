import { useState } from 'react';
import { PropTypes } from 'prop-types';

function Jokes({ title }) {
  const [joke, setJoke] = useState();

  const handleClick = () => {
    setJoke((prevState) => prevState);
  };

  // const updateJoke = (newJoke) => setJoke(newJoke);
  // updateJoke();

  return (
    <>
      <h1>{title}</h1>
      <h2>{joke}</h2>
      <button type="button" onClick={handleClick}>Get a Punchline</button>
      { joke ? <button type="button" onClick={() => setJoke((prevState) => prevState)}>Get A Punchline</button> : '' }
    </>
  );
}

Jokes.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Jokes;
