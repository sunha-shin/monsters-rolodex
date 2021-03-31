import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { // lifecyle method we can access
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
    // users == array
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const { monsters, searchField } = this.state;
    // pulling same value and setting them to those variobles
    // const monsters = this.state.monsters --> same way
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
      <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
