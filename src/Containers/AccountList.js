import React, {Component} from 'react'
import AccountCard from '../Components/AccountCard'
import adapter from '../Adapters/adapter'

export default class AccountList extends Component {

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

  // componentDidMount() {
  //   adapter.getAccounts()
  //   .then(resp => resp.json())
  //   .then(accounts => {
  //     this.setState({
  //       accounts
  //     })
  //   })
  // }

  render() {
    return (
      <div class="ui container">
        {this.state.loginDetails.map(item => <AccountCard details={item} />)}
      </div>
    )
  }
}
