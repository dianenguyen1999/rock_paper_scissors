import React, { Component } from "react";
import { handleChange, handleSubmit } from "react";
import { render } from "@testing-library/react";

class GroceryForm extends Component {
    state = {grocery: ''} 





    handleChange = (e) => {
    const {food, price} = e.target
    this.setState({ [food]: price })
    }





    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGrocery(this.state)
        this.setState({food: ''}) 
    }

    // render() {
    //   return(
    //     <form onSubmit={this.state.handleSubmit}
    //       <Input 
    //         required
    //         placeholder='add to Grocery list'

    //         name='food'
    //         value={this.state.food}
    //         onChange={this.handleChange}
    //       />
    //     </form>
    //   ) 
    //   )
    // }

//     render() {
//         return (
//         <form onSubmit={this.handleSubmit}>
//          <input
//              required
//              placeholder='Grocery list'

//               name='food'
//              value={this.state.food}
//              onChange={this.handleChange}
//           />
//           <button>Submit</button>
//           </form>
//         )
//     }
// }


    render() {
      const {name, price} = this.state

      return(
        <Form onSubmit={this.handleSubmit}>

          <Form.Input
            label= 'Name'
            required

            name='name'
            value='food'
            onChange={this.handleChange}
          />

          <Form.Input
            label= 'Price'
            required

            name='price'
            value='price'
            onChange={this.handleChange}
          />
          <Form.Button color='[]'>Submit</Form.Button>
        </Form>
    )
  }
}



export default GroceryForm;