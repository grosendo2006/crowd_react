import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const MoviesList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="release_year" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MoviesEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="release_year" />
        </SimpleForm>
    </Edit>
);

export const MoviesCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="release_year" />
        </SimpleForm>
    </Create>
);