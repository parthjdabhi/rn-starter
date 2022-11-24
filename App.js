import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorAdjusterScreen from "./src/screens/ColorAdjusterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentHello from "./src/screens/ComponentHello";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageList from "./src/screens/ImageList";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentScreen: ComponentScreen,
    ComponentHello: ComponentHello,
    ListScreen: ListScreen,
    ImageList: ImageList,
    CounterScreen: CounterScreen,
    ColorScreen: ColorScreen,
    ColorAdjusterScreen: ColorAdjusterScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
