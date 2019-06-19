import React, {Component} from 'react'
import PassListItem from '../Components/PassListItem'

export default class ListContainer extends Component {

  state = {
    loginDetails: [
      {
        company: 'Amazon',
        website: 'amazon.com',
        username: 'amazon_user_12',
        password: 'amazon_pass_12'
      },
      {
        company: 'Google',
        website: 'gmail.com',
        username: 'gmail_user_12',
        password: 'gmail_user_12'
      }
    ]
  }

  render() {
    return (
      <div class="ui container">
        {this.state.loginDetails.map(item=><PassListItem details={item} />)}
      </div>
    )
  }
}
