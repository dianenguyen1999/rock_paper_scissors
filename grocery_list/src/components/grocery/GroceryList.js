import React from 'react' 
// import GroceryForm from './GroceryForm'
// import GroceryForm from './GroceryForm'

const list = ({food, price}) => (
    <div>
        <h1>(food)</h1>
        <ul>
            {
                grocery.map( Groceries => <li key={Groceries.id}> {Groceries.food}</li>)
            }
        </ul>

    </div>
)

export default GroceryList; 