import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Guerrique', age: 40},
      { name: 'Alberto', age: 52}
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked');

    // don't do this
    // this.state.persons[0].name = 'Jean-Patrick';

    this.setState({
      persons: [
      { name: newName, age: 15},
      { name: 'Guerrique', age: 40},
      { name: 'Alberto', age: 102}
        ]
     })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
      { name: 'Max', age: 15},
      { name: 'Guerrique', age: 40},
      { name: event.target.value, age: 102}
        ]
     })
  }


  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is fantastic</p>
        <button
        style={style}
        onClick={()=> this.switchNameHandler('Jean-Michel')}>Switch name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}>My hobby : surfing</Person>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Georgette')}/>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}/>

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
