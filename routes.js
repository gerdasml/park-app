import { DrawerNavigator } from 'react-navigation';

import Map from './Map';
import About from './About';
import Point from './Point';
import SideMenu from './SideMenu';

export default DrawerNavigator({
  Map: {screen: Map},
  About: {screen: About},
  Point: {screen: Point}
},
{
  contentComponent: SideMenu,
  drawerWidth: 300
});


