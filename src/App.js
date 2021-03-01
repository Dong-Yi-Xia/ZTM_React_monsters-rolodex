import React, { Component } from 'react'
import { CardList } from './components/card-list/card.list.component'
import { SearchBox } from './components/search-box/search-box.component'


import './App.css';

class App extends Component{

  constructor(){
    super() // call the constructor on the Component class. Get access to this.state
    this.state = {
        monsters: [],
        searchField: ''
    }

    // this.searchOnChange = this.searchOnChange.bind(this)
    // adding the above line allow us to use regular function to call this, older way. Instead of using arrow function
  }

  // render onto the DOM for the first time, and calls whatever is in the block of code
  componentDidMount(){
    // JS native fetch and then use promises
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  searchOnChange = (e) => {
    //this.setState is asynchronous, 
    //therefore we add a 2nd arg, anonymous arrow function to log immidately
    //"this" keyword in ES6 arrow function refer to this function scope
    //if using normal function "this" is undefined, because "this" in very top level scope. unless we apply bind(this) in the constructor. older way.
    this.setState({
      searchField: e.target.value
    }, ()=>{console.log(this.state)})
  }

  render(){

      const { monsters, searchField } = this.state // Using Destructing
      //Create a new array of filter Monster
      const filteredMonsters = monsters.filter(monster => 
        //implied return without using curly () => {return ....}
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

        // when input change, cause state to update, cause the componenet to rerender.
        // rerender the filterMonsters, and pass to CardList
      
      return(
        <div className='App'>
          <h1>Monsters Rolodex</h1>
          <SearchBox 
             placeholder='search monster' 
             handleChange={this.searchOnChange}
            //  handleChange={e => this.setState( {searchField: e.target.value} )}
          />
          <CardList monsters={filteredMonsters} /> 
        </div>
      )
  }
}

export default App;