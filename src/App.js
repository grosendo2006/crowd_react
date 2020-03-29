import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import { PersonList, PersonEdit, PersonCreate } from './people';
import { MoviesList, MoviesEdit, MoviesCreate } from './movies';
import { RolesList, RolesEdit, RolesCreate } from './roles';
import { ParticipationsList, ParticipationsEdit, ParticipationsCreate } from './participations';
// import { PeopleInMovieList } from './people_in_movie';

import simpleRestProvider from 'ra-data-simple-rest';

const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('Authorization', 'Basic YWRtaW46Y3Iwd2RwNHNzdzByZA==');
  return fetchUtils.fetchJson(url, options);
}

const dataProvider = simpleRestProvider('http://crowdapi.herokuapp.com/api/v1', fetchJson);
// const dataProvider = simpleRestProvider('http://localhost:3001/api/v1', fetchJson);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="people" list={PersonList} edit={PersonEdit} create={PersonCreate}/>
    <Resource name="movies" list={MoviesList} edit={MoviesEdit} create={MoviesCreate}/>
    <Resource name="roles" list={RolesList} edit={RolesEdit} create={RolesCreate}/>
    <Resource name="participations" list={ParticipationsList} edit={ParticipationsEdit} create={ParticipationsCreate}/>
  </Admin>
);

export default App;