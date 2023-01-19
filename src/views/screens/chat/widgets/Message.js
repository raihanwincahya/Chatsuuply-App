import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ChatStyles from "../ChatStyles";
import Icons from "react-native-vector-icons/Ionicons";
import Img9 from "../../../../assets/img9.png";
import { useNavigation } from '@react-navigation/native';

export default function Message() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{ ...ChatStyles.row, marginTop: 20 }}>
        <Text style={ChatStyles.h1}>Messages</Text>
        <TouchableOpacity>
          <Icons name="create" size={30} color={"#567FBE"} />
        </TouchableOpacity>
      </View>
      <View style={ChatStyles.placeholder}>
        <View style={ChatStyles.row2}>
          <Icons name="search" size={20} color={"#8FB3EA"} />
          <Text style={{ color: "#8FB3EA", marginLeft: 10 }}>Search chats</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ ...ChatStyles.row2, marginTop: 10, justifyContent: "center" }}
        onPress={() => navigation.navigate("DetailChat")}
      >
        <Image source={Img9} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#92B4EC" }}>Kipli</Text>
          <Text style={{ color: "#EDBC10" }}>Dadadadad</Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 120 }}>
          <Text style={{ color: "#92B4EC" }}>22.17</Text>
          <View style={ChatStyles.bubble}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{ ...ChatStyles.row2, marginTop: 10, justifyContent: "center" }}
      >
        <Image source={Img9} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#92B4EC" }}>Mahmud</Text>
          <Text style={{ color: "#EDBC10" }}>Dadadadad</Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 120 }}>
          <Text style={{ color: "#92B4EC" }}>22.17</Text>
          <View style={ChatStyles.bubble}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </View>
      <View
        style={{ ...ChatStyles.row2, marginTop: 10, justifyContent: "center" }}
      >
        <Image source={Img9} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#92B4EC" }}>Tesih</Text>
          <Text style={{ color: "#EDBC10" }}>Dadadadad</Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 120 }}>
          <Text style={{ color: "#92B4EC" }}>22.17</Text>
          <View style={ChatStyles.bubble}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </View>
      <View
        style={{ ...ChatStyles.row2, marginTop: 10, justifyContent: "center" }}
      >
        <Image source={Img9} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#92B4EC" }}>Subagja</Text>
          <Text style={{ color: "#EDBC10" }}>Dadadadad</Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 120 }}>
          <Text style={{ color: "#92B4EC" }}>22.17</Text>
          <View style={ChatStyles.bubble}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </View>
      <View
        style={{ ...ChatStyles.row2, marginTop: 10, justifyContent: "center" }}
      >
        <Image source={Img9} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#92B4EC" }}>Caca</Text>
          <Text style={{ color: "#EDBC10" }}>Dadadadad</Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 120 }}>
          <Text style={{ color: "#92B4EC" }}>22.17</Text>
          <View style={ChatStyles.bubble}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </View>
      <View
        style={{ ...ChatStyles.row2, marginTop: 10, justifyContent: "center" }}
      >
        <Image source={Img9} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ color: "#92B4EC" }}>Siti</Text>
          <Text style={{ color: "#EDBC10" }}>Dadadadad</Text>
        </View>
        <View style={{ alignItems: "center", marginLeft: 120 }}>
          <Text style={{ color: "#92B4EC" }}>22.17</Text>
          <View style={ChatStyles.bubble}>
            <Text style={{ color: "white" }}>2</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
