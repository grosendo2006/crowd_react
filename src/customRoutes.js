import React from 'react';
import { Route } from 'react-router-dom';
import { PeopleInMovieList } from './people_in_movie';

export default [
    <Route exact path="/movies/:movie_id/people" component={PeopleInMovieList} />,
];