import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ColorAdjusterScreen from "./src/screens/ColorAdjusterScreen";
import ColorAdjusterScreenReducer from "./src/screens/ColorAdjusterScreenReducer";
import ColorScreen from "./src/screens/ColorScreen";
import ComponentHello from "./src/screens/ComponentHello";
import ComponentScreen from "./src/screens/ComponentScreen";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageList from "./src/screens/ImageList";
import LayoutBoxScreen from "./src/screens/LayoutBoxScreen";
import ListScreen from "./src/screens/ListScreen";
import TextinputScreen from "./src/screens/TextinputScreen";

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
    ColorAdjusterScreenReducer: ColorAdjusterScreenReducer,
    TextinputScreen: TextinputScreen,
    LayoutBoxScreen: LayoutBoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
