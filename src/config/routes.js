import { DrawerNavigator } from 'react-navigation';

import Map from '../component/Map';
import About from '../component/About';
import Point from '../component/Point';
import SideMenu from '../component/SideMenu';

export default DrawerNavigator({
  Map: {screen: Map},
  About: {screen: About},
  Point: {screen: Point}
},
{
  contentComponent: SideMenu,
  drawerWidth: 300
});


