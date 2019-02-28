import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import MapTest from './pages/MapTest';

const createRoutes = createStackNavigator({
  Main: { screen: Main },
  MapTest: { screen: MapTest },
}, {
  initialRouteName: 'MapTest',
  headerMode: 'none',
});

const Routes = createAppContainer(createRoutes);

export default Routes;
