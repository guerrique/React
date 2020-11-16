import React, { Component } from 'react';
// import React, { useState } from 'react';
import styled from 'styled-components';


import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
        background-color: green;
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;

        &:hover {
          background-color: lightgreen;
          color: black;
        }

`;

class App extends Component {
  state = {
    persons: [
      { id: 'zert', name: 'Max', age: 28},
      { id: 'bgre', name: 'Guerrique', age: 40},
      { id: 'kyjfg', name: 'Alberto', age: 52}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('was clicked');

  //   this.setState({
  //     persons: [
  //     { name: newName, age: 15},
  //     { name: 'Guerrique', age: 40},
  //     { name: 'Alberto', age: 102}
  //       ]
  //    })
  // }

  deletePersonHandler = (personIndex) => {
      // console.log('delete');
      const persons = this.state.persons.slice();
      // can also do this, same same
      // const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = { () => this.deletePersonHandler (index) }
              name = { person.name }
              age = { person.age }
              key = { person.id }
              changed = { (event) => this.nameChangedHandler(event, person.id) } />
          })}
        </div>
        );
      style.backgroundColor = 'red';
      style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (

        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className = {classes.join(' ')}>This is fantastic</p>
          <StyledButton
          onClick={this.togglePersonsHandler}>Toggle name</StyledButton>

           {persons}

        </div>

    );
  }
}

export default App;



// const app = props => {
//   const [ personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Guerrique', age: 40},
//       { name: 'Alberto', age: 52}
//       ]
//   });

//   const switchNameHandler = () => {
//     // console.log('was clicked');

//     // don't do this
//     // this.state.persons[0].name = 'Jean-Patrick';

//     setPersonsState({
//       persons: [
//       { name: 'Maxime', age: 15},
//       { name: 'Guerrique', age: 40},
//       { name: 'Alberto', age: 102}
//         ]
//      })
//   }


//   return (
//     <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is fantastic</p>
//         <button onClick={switchNameHandler}>Switch name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My hobby : surfing</Person>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

//       </div>
//     );
// }

// export default app;
