import React from 'react';

// const Card = props => (
//   <div className="card clearfix">
//     <h2 className="card__title">{props.cardTitle}</h2>
//     {props.children}
//   </div>
// );

const Card = (props) => {
  if (props.cardHeader) {
    return (
      <div className="card card--header clearfix">
        <div className="card__header">
          <h2 className="card__title">{props.cardTitle}</h2>
        </div>
        <div className="card__wrapper">
          {props.children}
        </div>
      </div>
    );
  }
  return (
    <div className="card clearfix">
      <h2 className="card__title">{props.cardTitle}</h2>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  cardTitle: React.PropTypes.string,
  children: React.PropTypes.node,
  cardHeader: React.PropTypes.bool,
};

export default Card;
