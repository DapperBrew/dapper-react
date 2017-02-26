import React from 'react';
import { connect } from 'react-redux';

// images
import icons from '../img/side-icons.svg';

// components
import Card from '../../../../../components/Card';

// selectors
import {
  getABV,
  getFinalGravity,
  getOriginalGravity,
  getRecipeIbu,
  getRecipeSrm,
} from '../selectors/recipeEdit';


// returns of the recipe sg value is within range, close, or out of range
// for use with sg values (1.015, etc)
const checkSg = (sgMin, sgMax, recipeSg) => {
  const check = 0.1;
  const sgMinClose = 1 + ((sgMin - 1) - ((sgMin - 1) * check));
  const sgMaxClose = 1 + ((sgMax - 1) + ((sgMax - 1) * check));
  if (recipeSg >= sgMin && recipeSg <= sgMax) {
    return ['in-style', 'in-style'];
  } else if (recipeSg >= sgMinClose && recipeSg <= sgMin) {
    return ['close', 'under'];
  } else if (recipeSg <= sgMaxClose && recipeSg >= sgMax) {
    return ['close', 'over'];
  } else if (recipeSg > sgMaxClose) {
    return ['out', 'over'];
  }
  return ['out', 'under'];
};

// returns if the recipe value is within range, close, or out of range
// for use with stats that use regular numbers such as SRM, ABV, and IBU.
const checkNum = (numMin, numMax, recipeNum) => {
  const check = 0.1;
  const numMinClose = (numMin) - ((numMin) * check);
  const numMaxClose = numMax * (1 + check);
  if (recipeNum >= numMin && recipeNum <= numMax) {
    return ['in-style', 'in-style'];
  } else if (recipeNum >= numMinClose && recipeNum <= numMin) {
    return ['close', 'under'];
  } else if (recipeNum <= numMaxClose && recipeNum >= numMax) {
    return ['close', 'over'];
  } else if (recipeNum > numMaxClose) {
    return ['out', 'over'];
  }
  return ['out', 'under'];
};

const StyleGuide = (props) => {
  let recipeStyle = '';
  if (props.recipeStyle) {
    recipeStyle = props.styles[props.recipeStyle];
  }

  // setup variables & defaults for style guide numbers
  const {
    category = 'Select a Recipe Style',
    abvMin = 0,
    abvMax = 0,
    ogMin = '1.000',
    ogMax = '1.000',
    fgMin = '1.000',
    fgMax = '1.000',
    srmMin = 0,
    srmMax = 0,
    ibuMin = 0,
    ibuMax = 0,
  } = recipeStyle;

  // setup variables & defaults for recipe numbers
  const {
    recipeOG = '1.000',
    recipeFG = '1.000',
    recipeABV = 0,
    recipeIBU = 0,
    recipeSRM = 0,
  } = props;

  const ogInStyle = checkSg(ogMin, ogMax, recipeOG);
  const fgInStyle = checkSg(fgMin, fgMax, recipeFG);
  const abvInStyle = checkNum(abvMin, abvMax, recipeABV);
  const ibuInStyle = checkNum(ibuMin, ibuMax, recipeIBU);
  const srmInStyle = checkNum(srmMin, srmMax, recipeSRM);

  const allInStyle = () => {
    if (
      ogInStyle[0] === 'in-style'
      && fgInStyle[0] === 'in-style'
      && abvInStyle[0] === 'in-style'
      && ibuInStyle[0] === 'in-style'
      && srmInStyle[0] === 'in-style'
    ) {
      return <span className="style-check">This recipe is in style.</span>;
    } else if (
      ogInStyle[0] !== 'out'
      && fgInStyle[0] !== 'out'
      && abvInStyle[0] !== 'out'
      && ibuInStyle[0] !== 'out'
      && srmInStyle[0] !== 'out'
    ) {
      return <span className="style-check">This recipe is almost in style</span>;
    }
    return <span className="style-check">This recipe is out of style</span>;
  };

  return (
    <Card cardHeader={true} cardTitle="Style Guide">
      <h4>{category}</h4>
      <table className="style-table">
        <thead>
          <tr>
            <th className="style-table__header style-table__header--expand text-left">Stat</th>
            <th className="style-table__header text-left">Range</th>
            <th className="style-table__header text-right">Recipe</th>
          </tr>
        </thead>
        <tbody>
          <tr className="style-table__row">
            <td className="style-table__cell text-left">OG</td>
            <td className="style-table__cell text-left">{`${ogMin} - ${ogMax} `}</td>
            <td className={`style-table__cell text-right is-${ogInStyle[0]}`}>
              {recipeOG}
              <svg className="style-table__icon">
                <use xlinkHref={`${icons}#style-icon-${ogInStyle[1]}`} />
              </svg>
            </td>
          </tr>
          <tr className="style-table__row">
            <td className="style-table__cell text-left">FG</td>
            <td className="style-table__cell text-left">{`${fgMin} - ${fgMax} `}</td>
            <td className={`style-table__cell text-right is-${fgInStyle[0]}`}>
              {recipeFG}
              <svg className="style-table__icon">
                <use xlinkHref={`${icons}#style-icon-${fgInStyle[1]}`} />
              </svg>
            </td>
          </tr>
          <tr className="style-table__row">
            <td className="style-table__cell text-left">ABV</td>
            <td className="style-table__cell text-left">{`${abvMin}% - ${abvMax}%`}</td>
            <td className={`style-table__cell text-right is-${abvInStyle[0]}`}>
              {recipeABV}%
              <svg className="style-table__icon">
                <use xlinkHref={`${icons}#style-icon-${abvInStyle[1]}`} />
              </svg>
            </td>
          </tr>
          <tr className="style-table__row">
            <td className="style-table__cell text-left">IBU</td>
            <td className="style-table__cell text-left">{`${ibuMin} - ${ibuMax} `}</td>
            <td className={`style-table__cell text-right is-${ibuInStyle[0]}`}>
              {recipeIBU}
              <svg className="style-table__icon">
                <use xlinkHref={`${icons}#style-icon-${ibuInStyle[1]}`} />
              </svg>
            </td>
          </tr>
          <tr className="style-table__row">
            <td className="style-table__cell text-left">SRM</td>
            <td className="style-table__cell text-left">{`${srmMin} - ${srmMax}`}</td>
            <td className={`style-table__cell text-right is-${srmInStyle[0]}`}>
              {recipeSRM}
              <svg className="style-table__icon">
                <use xlinkHref={`${icons}#style-icon-${srmInStyle[1]}`} />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
      {allInStyle()}
    </Card>
  );
};

StyleGuide.propTypes = {
  recipeStyle: React.PropTypes.string,
  styles: React.PropTypes.object.isRequired, // eslint-disable-line
  recipeOG: React.PropTypes.string.isRequired,
  recipeFG: React.PropTypes.string.isRequired,
  recipeABV: React.PropTypes.number.isRequired,
  recipeIBU: React.PropTypes.number.isRequired,
  recipeSRM: React.PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  styles: state.data.styles,
  recipeStyle: state.recipeEdit.recipeStaged.style,
  recipeOG: getOriginalGravity(state),
  recipeFG: getFinalGravity(state),
  recipeABV: getABV(state),
  recipeIBU: getRecipeIbu(state),
  recipeSRM: getRecipeSrm(state),
});

export default connect(mapStateToProps)(StyleGuide);
