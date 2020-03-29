import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const PersonList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="aliases" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PersonEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="aliases" />
        </SimpleForm>
    </Edit>
);

export const PersonCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="first_name" />
            <TextInput source="last_name" />
            <TextInput source="aliases" />
        </SimpleForm>
    </Create>
);