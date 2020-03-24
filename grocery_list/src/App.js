import React, {Component} from 'react';
import GroceryForm from './components/Groceries/GroceryForm'
import GroceryList from './components/Groceries/GroceryList'

class App extends Component { 
  // constructor(props){ // 
  //   super(props); // bring down everything 
  
  state = {
    Groceries: [
    {id: 1, food: 'eggs', price: '$1.99',complete: false},
    {id: 2, food: 'milk', price: '$2.99', complete: false},
    {id: 3, food: 'cheese', price: '$4.96', complete: false},
    {id: 4, food: 'bread', price: '$2.99', complete: false},
    {id: 5, food: 'peanutbutter', price: '$5.99', complete: false},


  ], 
  }
  
  // getUniqId = () => {
  //   return Math.floor((1+ Math.random()) * 0x10000)
  //   .toString(15)
  //   .substring(1);
  // }

  addItem = (food) => {
    const {Groceries} = this.state
    const newGroceries = { id: this.getUniqId, food, complete: false  }
    this.setState({Groceries: [newGroceries, ...Groceries] })
  }
  
  render() {
    const { groceries, showForm } = this.state
    return (
    <div>
      <h1>Grocery List</h1>
    </div>       
    )
  }
}

export default App;
