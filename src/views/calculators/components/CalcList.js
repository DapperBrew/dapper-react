import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions
import { updateHeader } from '../../../actions/ui';

// images
import icon from '../img/icon.svg';

const calcs = [
  {
    name: 'ABV',
    key: '1',
    link: 'abv',
    desc: 'Calculate the ABV of your homebrew',
  },
  {
    name: 'ABW',
    key: '2',
    link: 'abv',
    desc: 'Calculate the AVW of your homebrew',
  },
  {
    name: 'Yeast Starter',
    key: '3',
    link: 'abv',
    desc: 'Calculate your yeast starter',
  },
];

class Calculators extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcName: '',
      calcDesc: '',
    };
  }

  componentWillMount() {
    this.props.dispatch(updateHeader('Calculators'));
    this.handleHoverLeave();
  }

  handleHover = (name, desc) => {
    this.setState({ calcName: name });
    this.setState({ calcDesc: desc });
  }

  handleHoverLeave = () => {
    this.setState({
      calcName: 'Calculator Description',
      calcDesc: 'Hover over a calculator to learn more about it. Click on a calculator name to open it.',
    });
  }

  renderListItem = (name, key, link, desc) => (
    <Link
      key={key}
      onMouseEnter={() => this.handleHover(name, desc)}
      onMouseLeave={() => this.handleHoverLeave(name, desc)}
      to={`/calculators/${link}`}
    >
      <li className="calc-list__item">
        <div className="calc-list__text-wrap">
          {name}
        </div>
        <div className="calc-list__button-wrap">
          <svg className="calc-icon">
            <use xlinkHref={`${icon}#calc-icon-tail-right`} />
          </svg>
        </div>
      </li>
    </Link>
  )


  render() {
    return (
      <div className="container">
        <div className="card card--no-padding calc-list">
          <h5 className="calc-list__title">Calculator Name</h5>
          <ul className="calc-list__list">
            {calcs.map(calc => (
              this.renderListItem(calc.name, calc.key, calc.link, calc.desc)
            ))}
          </ul>
        </div>
        <div className="card card--no-padding calc-desc">
          <h3 className="calc-desc__title">{this.state.calcName}</h3>
          <div className="calc-desc__body">
            {this.state.calcDesc}
          </div>
        </div>
      </div>
    );
  }
}

Calculators.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(Calculators);
