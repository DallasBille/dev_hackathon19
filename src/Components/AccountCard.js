import React from 'react';

const AccountCard = (props) => {
  return (
    <div className="item">
      <div className="content">
        <div className="header">
          <h2>{props.details.website}</h2>
        </div>
      </div>
    </div>
  )
}

export default AccountCard;
