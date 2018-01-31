import { DrawerNavigator } from 'react-navigation';

import Map from './Map';
import About from './About';
import SideMenu from './SideMenu';

export default DrawerNavigator({
  Map: {screen: Map},
  About: {screen: About}
},
{
  contentComponent: SideMenu,
  drawerWidth: 300
});


