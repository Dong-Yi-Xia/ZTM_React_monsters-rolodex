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
          
          <SearchBox 
             placeholder='search monster' 
            //  handleChange={this.searchOnChange}
             handleChange={e => this.setState( {searchField: e.target.value} )}
          />
          <CardList monsters={filteredMonsters} /> 
        </div>
      )
  }
}

export default App;