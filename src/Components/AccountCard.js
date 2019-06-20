import React from 'react';

const AccountCard = props => {
  return (
    <div className="account-card">
      <div className="content">
        <div className="header">
          <h2>{props.account.company}</h2>
        </div>
      </div>
    </div>
  )
}

export default AccountCard;
