import React, {Component} from 'react'
import AccountCard from '../Components/AccountCard'
import adapter from '../Adapters/adapter'

export default class AccountList extends Component {

  state = {
    accounts: []
  }
  // company: '',
  // website: '',
  // username: '',
  // password: ''

  componentDidMount() {
    adapter.getAccounts()
    .then(accounts => {
      this.setState({
        accounts
      })
    })
  }

  render() {
    return (
      <div className="ui container">
        {this.state.accounts.map(account => <AccountCard account={account} />)}
      </div>
    )
  }
}
