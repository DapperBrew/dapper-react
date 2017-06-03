import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';
import { Route } from 'react-router-dom';

import store from '../../store';

// components
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';

// actions
import { fetchData, fetchStyles } from '../../actions/data';
import { fetchEquipmentList } from '../../views/equipment/actions/equipment';


class Main extends React.Component {

  componentWillMount() {
    // rehydrate from localstorage before loading from API
    persistStore(store, {}, () => {
      this.props.dispatch(fetchData());
      this.props.dispatch(fetchStyles());
      this.props.dispatch(fetchEquipmentList());
    });
  }

  render() {
    if (this.props.data.loaded && this.props.auth.authenticated) {
      // Content uses Route component to gain access to location
      // Otherwise it blocks update.
      return (
        <div className="app">
          <Sidebar />
          <Route component={Content} />
        </div>
      );
    }
    return <div>LOADING</div>;
  }

}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired, // eslint-disable-line
  loaded: PropTypes.bool,
  auth: PropTypes.object.isRequired, // eslint-disable-line
  authenticated: PropTypes.bool.isRequired,
};

Main.defaultProps = {
  loaded: false,
};

const mapStateToProps = state => ({
  data: state.data,
  auth: state.auth,
});

export default connect(mapStateToProps)(Main);
