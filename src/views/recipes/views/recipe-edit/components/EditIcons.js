import React from 'react';

import icon from '../img/icons.svg';


const EditIcons = props => (
  <td className="recipe-table__cell recipe-table__cell--shrink text-right">
    <svg onClick={props.editItem} className="recipe-table__icon recipe-table__icon--edit">
      <use xlinkHref={`${icon}#nc-icon-edit-72`} />
    </svg>
    <svg onClick={props.removeItem} className="recipe-table__icon recipe-table__icon--remove">
      <use xlinkHref={`${icon}#nc-icon-bold-remove`} />
    </svg>
  </td>
);

EditIcons.propTypes = {
  removeItem: React.PropTypes.func.isRequired,
  editItem: React.PropTypes.func.isRequired,
};

export default EditIcons;
