import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {

    render(){
        return(
            <div className="navbar uk-navbar-container uk-margin">
              <div className="uk-navbar-right">
                <li><Link to="/">Logout</Link></li>
              </div>
            </div>
        )
    }
}

export default Nav;
