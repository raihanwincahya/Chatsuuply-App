import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationScreen from "./src/views/screens/NavigationScreen";
import Post from "./src/views/screens/home/widgets/Post";
import AppearancePost from "./src/views/screens/home/widgets/AppearancePost";
import DetailChat from "./src/views/screens/chat/widgets/DetailChat";

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Navigation" component={NavigationScreen} />
          <Stack.Screen name="Post" component={Post} />
          <Stack.Screen name="Appearance" component={AppearancePost} />
          <Stack.Screen name="DetailChat" component={DetailChat} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
