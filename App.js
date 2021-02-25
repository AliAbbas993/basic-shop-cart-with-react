import React, { Component } from 'react';
import Navbar from './components/navbar.jsx';
import Counters from './components/counters.jsx';
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id: 1 , value: 0 , price: 750},
        {id: 2 , value: 3 , price: 250},
        {id: 3 , value: 1 , price: 265},
        {id: 4 , value: 4 , price: 350}
    ],
    total: 0
  }

  constructor(props){
    super(props);
    console.log('App - Constructor' , this.props);
  }

  componentDidMount(){
    console.log('App - Mounted');
  }
  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++
      this.setState({counters});
  }
  handleDecrement = counter =>{
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--
      this.setState({counters});
  }
  handleReset = () =>{
      const counters = this.state.counters.map(c => {
          c.value = 0
          return c;
      });
      this.setState({counters});
  }
  handleDelete = (countId) =>{
      console.log(countId);
      const counters = this.state.counters.filter(c => c.id !== countId);
      this.setState({counters});
  }
  subTotal = () =>{
    var subtotal = 0;
    for(var i = 0; i<this.state.counters.length; i++){
      subtotal = subtotal + this.state.counters[i].price;
    }
    this.setState({
      total : subtotal
    });
    console.log(this.state.total);
  }

  render() { 
    console.log('App - Rendered');
    console.log( this.SubTotal, "subtotal")
    return ( 
      <React.Fragment>
        <Navbar count={this.state.counters.filter(c=> c.value >0).length} />
        <main className="container">
          <Counters
            counters = {this.state.counters}
            total = {this.state.total}
            onReset = {this.handleReset}
            onDelete = {this.handleDelete}
            onIncrement = {this.handleIncrement}
            onDecrement = {this.handleDecrement} 
            // subTotal = {this.state.total}
          />
        </main>

      </React.Fragment>
     );
  }
}

export default App;
