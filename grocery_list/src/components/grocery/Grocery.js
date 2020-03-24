import React, { Component } from 'react'
import {Button, Table, TableBody, TableHeader} from 'semantic-ui-react';

const Item = ({id, name, price}) => (

    <Table.Row>
        <Table.Cell textAlign='center' width='10'>Item: {itemNme} </Table.Cell>
        <Table.Cell textAlign='center'>Price:{price} </Table.Cell>
    </Table.Row>
)

export default Grocery; 