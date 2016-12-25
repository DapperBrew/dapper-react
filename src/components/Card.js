import React from 'react';

const Card = props => (
  <div className="col-md-12 card">
    <h3 className="card__title">{props.cardTitle}</h3>
    {props.children}
  </div>
);

export default Card;
