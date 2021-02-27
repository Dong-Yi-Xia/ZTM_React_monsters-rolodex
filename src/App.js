import React, { Component } from 'react'
import { CardList } from './components/card-list/card.list.component'


import './App.css';

class App extends Component{

  constructor(){
    super() // call the constructor on the Component class. Give acess to this.state
    this.state = {
        monsters: []
    }
  }

  // render onto the DOM for the first time, and calls whatever is in the block of code
  componentDidMount(){
    // JS native fetch and then use promises
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }


  render(){
      return(
        <div className='App'>
        <CardList monsters={this.state.monsters} /> 
        

        </div>
      )
  }
}

export default App;