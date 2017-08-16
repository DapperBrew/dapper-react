import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// images
import icon from '../img/icon.svg';


const CalcLayout = props => (
  <div className="calc container">
    <div className="card calc-breadcrumb">
      <Link className="calc-breadcrumb__link" to={'/calculators'}>
        <svg className="calc-icon calc-icon--breadcrumb">
          <use xlinkHref={`${icon}#calc-icon-tail-left`} />
        </svg>
        Calculators
      </Link>
      &nbsp;/ <span className="calc-breadcrumb__current">{`${props.name}`}</span>
    </div>
    {props.children}
  </div>
);

CalcLayout.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CalcLayout;
