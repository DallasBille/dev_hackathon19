import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Navbar from './Components/Navbar'
import AccountList from './Containers/AccountList'
import adapter from './Adapters/adapter'

class App extends Component {

    openForm = (event) => {
      document.querySelector('div.form-modal').style.display = 'block'
    }

    closeForm = (event) => {
      document.querySelector('div.form-modal').style.display = ''
    }

    handleSubmit = (event, newDetails) => {
      adapter.postAccount(newDetails)
    }

    render(){
      return (
        <div className="App">
          <Navbar />
          <button className="add-new" onClick={this.openForm}> Add New </button>
          <div className="profile uk-text-center uk-child-width-1-2@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
            <Form closeForm={this.closeForm} handleSubmit={this.handleSubmit} />
            <AccountList />
          </div>

        </div>
      );
    }
}

export default App;
