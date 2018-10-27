import * as React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

import Home from './views/Home/Home';
import SelectType from './views/SelectType/SelectType';
import SpExp from './views/SpExp/SpExp';
import ExpDetailContainer from './views/ExpDetailContainer/ExpDetailContainer';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/SelectType' component={SelectType} />
          <Route path='/SpExp/:type' component={SpExp} />
          <Route path='/ExpDetail/:id' component={ExpDetailContainer} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
