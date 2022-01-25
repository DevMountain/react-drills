import React, { useState } from 'react';
import './App.css';


function Image({url}) {
  return (
    <img src={url}></img>
  );
}

export default Image;