import React, { useState, Component } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Feather from "react-native-vector-icons/Feather";
import HomeScreen from "./home/HomeScreen";
import ChatScreen from "./chat/ChatScreen";
import ProfileScreen from "./profile/ProfileScreen";

export default class NavigationScreen extends Component {
  render() {
    const Tab = createMaterialBottomTabNavigator();
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#567FBE"
        inactiveColor="#D8D8D8"
        labelStyle={{ fontSize: 10 }}
        shifting={false}
        barStyle={{
          backgroundColor: "#FCFDFF",
          paddingVertical: 5,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="message-square" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}