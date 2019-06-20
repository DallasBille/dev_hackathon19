import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import AccountList from './Containers/AccountList'


class App extends Component {

    render(){
      return (
        <div className="App">
          <Navbar />
          <div className="profile uk-text-center uk-child-width-1-2@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
          <Form />
          <AccountList />

          </div>

        </div>
      );
    }
}

export default App;
