import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const PeopleInMovieList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <TextField source="roles" />
        </Datagrid>
    </List>
);