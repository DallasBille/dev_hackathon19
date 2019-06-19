import React from 'react';

const PassListItem = (props) => {
  return (
    <div class="item">
      <div class="content">
        <div class="header">
          <h2>{props.details.website}</h2>
        </div>
      </div>
    </div>
  )
}

export default PassListItem;
