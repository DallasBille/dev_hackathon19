import React, {Component} from 'react';

// const WebsiteCard = props => {
//
// }

class WebsiteCard extends Component {

    render(){
        return(
          <div className="uk-child-width-1-2@s" uk-grid>
            <div>
              <div className="uk-card uk-card-default uk-card-small uk-card-body">
                <h3 className="uk-card-title">Small</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>

        )
    }
}

export default WebsiteCard;
