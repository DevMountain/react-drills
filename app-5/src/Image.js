import React from 'react';

function Image({url, title}) {
  return (
    <>
      <h1>{title}</h1>
      <img src={url} alt='Ogden Kraut'></img>
    </>
  );
}

export default Image;