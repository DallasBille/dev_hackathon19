import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import AccountList from './Containers/AccountList'


class App extends Component {

    openForm = (event) => {
      document.querySelector('div.form-modal').style.display = 'block'
    }

    closeForm = (event) => {
      document.querySelector('div.form-modal').style.display = ''
    }

    render(){
      return (
        <div className="App">
          <Navbar />
          <button onClick={this.openForm}> Add New </button>
          <div className="profile uk-text-center uk-child-width-1-2@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
            <Form closeForm={this.closeForm} />
            <AccountList />
          </div>

        </div>
      );
    }
}
// <Fuck/>
// <Nav/>

export default App;

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
