import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/Main';

const createRoutes = createStackNavigator({
  Main: { screen: Main },
}, {
  initialRouteName: 'Main',
  headerMode: 'none',
});

const Routes = createAppContainer(createRoutes);

export default Routes;
