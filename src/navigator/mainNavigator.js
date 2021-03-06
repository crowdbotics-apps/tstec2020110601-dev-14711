import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
//import BlankScreen314192Navigator from '../features/BlankScreen314192/navigator';
import SignupScreen114069Navigator from "../features/SignupScreen114069/navigator";

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
//BlankScreen314192: { screen: BlankScreen314192Navigator },
 
    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    },

    SignupScreen114069: {screen: SignupScreen114069Navigator}
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
