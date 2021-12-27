import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={routes.ACCOUNT} component={MyAccountScreen} />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
    {/* <Stack.Screen name={routes.LISTINGS}component={ListingsScreen} /> */}
    {/* <Stack.Screen name="Log out" component={WelcomeScreen} /> */}
  </Stack.Navigator>
);

export default AccountNavigator;
