import React, {Component} from 'react';
import WebsiteCard from '../Components/WebsiteCard'

class WebsiteList extends Component {


    render(){
        return(
            <div className="website-list">
              <WebsiteCard />
            </div>
        )
    }
}

export default WebsiteList;
