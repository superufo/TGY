import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import Index from "./screens/tabcontrols/index";
import Discovery from "./screens/tabcontrols/discovery";
import Message from "./screens/tabcontrols/message";
import Profile from "./screens/tabcontrols/profile";

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Index: { screen: Index },
    Discovery: { screen: Discovery },
    Message: { screen: Message },
    Profile: { screen: Profile }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;