import React from 'react';
import { connect } from 'react-redux';
import { persistStore } from 'redux-persist';

import store from '../../store';

// components
import Sidebar from '../sidebar/Sidebar';
import Content from '../content/Content';

// actions
import { fetchData, fetchStyles } from '../../actions/data';


class Main extends React.Component {

  componentWillMount() {
    // rehydrate from localstorage before loading from API
    persistStore(store, {}, () => {
      this.props.dispatch(fetchData());
      this.props.dispatch(fetchStyles());
    });
  }

  render() {
    if (this.props.data.loaded && this.props.auth.authenticated) {
      return (
        <div className="app">
          <Sidebar />
          <Content />
        </div>
      );
    }
    return <div>LOADING</div>;
  }

}

Main.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object, // eslint-disable-line
  loaded: React.PropTypes.bool,
  auth: React.PropTypes.object,
  authenticated: React.PropTypes.bool,
};

const mapStateToProps = state => ({
  data: state.data,
  auth: state.auth,
});

export default connect(mapStateToProps)(Main);
