import React from 'react';
import { connect } from 'react-redux';

// actions
import { updateHeader } from '../../actions/ui';

class NotFound extends React.Component {

  componentWillMount() {
    this.props.dispatch(updateHeader('Whelp...'));
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12 card">
          <h3 className="card__title">404 Not Found</h3>
        </div>
      </div>
    );
  }
}

NotFound.propTypes = {
  dispatch: React.PropTypes.func,
};

export default connect()(NotFound);
