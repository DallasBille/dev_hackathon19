import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'
import Nav from './Components/Nav'
import WebsiteList from './Containers/WebsiteList'


class App extends Component {

    render(){
      return (
        <div className="App">
          <Nav />
          <div className="profile uk-text-center uk-child-width-1-2@s uk-grid-match uk-grid" data-uk-grid="masonry: true">
          <Form />
          <WebsiteList />

          </div>

        </div>
      );
    }
}
// <Fuck/>
// <Nav/>

export default App;
