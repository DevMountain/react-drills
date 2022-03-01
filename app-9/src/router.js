import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Details from './Details';

export default (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/details' render={({ match }) => <Details id={match.params.id} />} />
    </Routes>
);