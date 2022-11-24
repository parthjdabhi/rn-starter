import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ComponentHello from "./src/screens/ComponentHello";
import ComponentScreen from "./src/screens/ComponentScreen";
import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    ComponentHello: ComponentHello,
  },
  {
    initialRouteName: "ComponentHello",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
