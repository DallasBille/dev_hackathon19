import React from 'react';

const AccountCard = props => {


  return (
    <div className="account-card">
      <div className="content">
        <div className="header">
          <h2>{props.account.company}</h2>
          <strong>URL:  </strong><a href={props.account.website_url} target="_blank">{props.account.website_url}</a>
          <p><strong>Username:  </strong> {props.account.username}</p>
          <p><strong>Password:  </strong> {props.account.password}</p>
          <button onClick={()=>props.handleDelete(props.account.id)} className="account-delete">Delete Account</button>
        </div>
      </div>
    </div>
  )
}
// <p></p>

export default AccountCard;
