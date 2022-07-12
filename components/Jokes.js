import { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

function Jokes({ title }) {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>{title}</h1>
      <h2>{value}</h2>
      <button type="button" onClick={handleClick}>Get a Punchline</button>
    </>
  );
}

Jokes.propTypes = {
  title: propTypes.string.isRequired,
};

export default Jokes;
