import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Loader from './components/Loader'
import Menu from './components/Menu';
import Content from './components/Content';

class App extends Component {
  render() {
    const {isAppLoading/*, selectedProject*/} = this.props;
    return (isAppLoading ? (<Loader />) : (<main>
      <Menu />
      <Content location={this.props.location} />
    </main>)
    )
  }
}

function mapStateToProps (state) {
  return {
    isAppLoading: state.didAppLoad.loading/*,
    selectedProject: null*/
  }
}

export default withRouter(connect(mapStateToProps)(App));
