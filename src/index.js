import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import Store from './store';

import './config/ReactotronConfig';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
				<Routes />
      </Provider>
    );
  }
}

export default App;
