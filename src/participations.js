import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, ReferenceField } from 'react-admin';

export const ParticipationsList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="personId" reference="people">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="person_id" />
            <TextField source="role_id" />
            <TextField source="movie_id" />
            <EditButton />
        </Datagrid>
    </List>
);

export const ParticipationsEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="person_id" />
            <TextInput source="role_id" />
            <TextField source="movie_id" />
        </SimpleForm>
    </Edit>
);

export const ParticipationsCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="person_id" />
            <TextInput source="role_id" />
            <TextField source="movie_id" />
        </SimpleForm>
    </Create>
);