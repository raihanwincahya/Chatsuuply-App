import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React, { Component } from "react";
import HomeStyles from "./HomeStyles";
import Header from "./widgets/Header";
import Feed from "./widgets/Feed";

export default class HomeScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={HomeStyles.container}>
          <Header />
          <Feed />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
