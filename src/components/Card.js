import React from 'react';

const Card = props => (
  <div className="card clearfix">
    <h2 className="card__title">{props.cardTitle}</h2>
    {props.children}
  </div>
);

Card.propTypes = {
  cardTitle: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Card;
