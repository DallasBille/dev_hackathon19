import React, {Component} from 'react'
import AccountCard from '../Components/AccountCard'
import adapter from '../Adapters/adapter'

export default class AccountList extends Component {

  state = {
    accounts: []
  }

  componentDidMount() {
    adapter.getAccounts()
    .then(accounts => {
      this.setState({
        accounts
      })
    })
  }

  handleDelete = (id) => {
      const filtered = this.state.accounts.filter(account => {
          if(account.id != id){
              return account
          }
      })
      this.setState({
          accounts: filtered
      })
  }

  render() {
    return (
      <div id="account-container" className="ui container">
        {this.state.accounts.map(account => <AccountCard handleDelete={this.handleDelete}key={account.id} account={account} />)}
      </div>
    )
  }
}
