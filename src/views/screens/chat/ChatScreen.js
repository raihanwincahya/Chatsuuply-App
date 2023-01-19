import { ScrollView, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import Message from "./widgets/Message";
import ChatStyles from './ChatStyles';

export default class ChatScreen extends Component {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={ChatStyles.container}>
          <Message />
        </SafeAreaView>
      </ScrollView>
    )
  }
}

