import React from 'react';

const AccountCard = props => {

  return (
    <div className="account-card">
      <div className="content">
        <div className="header">
          <h2>{props.account.company}</h2>
          <a href={props.account.website_url} target="_blank">URL: {props.account.website_url}</a>
          <p><strong>Username:</strong> {props.account.username}</p>
          <p><strong>Password:</strong> {props.account.password}</p>
        </div>
      </div>
    </div>
  )
}
// <p></p>

export default AccountCard;
