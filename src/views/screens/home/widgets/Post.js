// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Post() {
//   return (
//     <View>
//       <Text>Post</Text>
//     </View>
//   )
// }

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyles from "../HomeStyles";
import Icons from "react-native-vector-icons";

export default function Post({ navigation }) {
  return (
    <View style={HomeStyles.row}>
      <Icons name="close" size={30} />
      <Text>Create Post</Text>
      <TouchableOpacity
        style={HomeStyles.circle}
        onPress={() => navigation.navigate("Appearance")}
      >
        <Icons name="navigate" size={30} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}

// const styles = StyleSheet.create({});
