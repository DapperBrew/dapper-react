import React from 'react';

const Card = props => (
  <div className="card clearfix">
    <h3 className="card__title">{props.cardTitle}</h3>
    {props.children}
  </div>
);

Card.propTypes = {
  cardTitle: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default Card;
