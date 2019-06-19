import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Nav from './Components/Nav'


class App extends Component {

    render(){
      return (
        <div className="App">
            <Nav />
            <Form />
        </div>
      );
    }
}
// <Fuck/>
// <Nav/>

export default App;
