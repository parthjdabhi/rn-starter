import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentHello from "./src/screens/ComponentHello";
import ComponentScreen from "./src/screens/ComponentScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    ComponentHello: ComponentHello,
    ListScreen: ListScreen
  },
  {
    initialRouteName: "ListScreen",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
