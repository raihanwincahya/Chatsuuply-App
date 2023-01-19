import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import ChatStyles from "../ChatStyles";
import Icons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Img10 from "../../../../assets/img10.png";

export default function DetailChat({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={ChatStyles.header}>
        <View style={{ ...ChatStyles.row2 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons name="arrow-back" size={24} color={"white"} />
          </TouchableOpacity>
          <Image source={Img10} style={{ marginHorizontal: 10 }} />
          <View>
            <Text style={{ color: "#567FBE" }}>Caca</Text>
            <Text style={{ color: "white" }}>Online</Text>
          </View>
          <Icons
            name="call"
            size={24}
            color={"white"}
            style={{ marginLeft: 90 }}
          />
          <Icons
            name="videocam"
            size={24}
            color={"white"}
            style={{ marginLeft: 20 }}
          />
          <Feather
            name="more-vertical"
            size={24}
            color={"white"}
            style={{ marginLeft: 20 }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#CCC", marginTop: 12, marginBottom: 50 }}>
          Today
        </Text>
      </View>
      <View style={ChatStyles.chat}>
        <Text style={{ color: "white", marginTop: 3 }}>Hello man!</Text>
        <Text
          style={{
            color: "#B0AFAF",
            fontSize: 9,
            marginLeft: 95,
            marginTop: -10,
          }}
        >
          20.17
        </Text>
      </View>
      <View style={ChatStyles.chat2}>
        <Text style={{ color: "white", marginTop: 3 }}>Hii bro</Text>
        <Text
          style={{
            color: "#B0AFAF",
            fontSize: 9,
            marginLeft: 70,
            marginTop: -10,
          }}
        >
          20.30
        </Text>
      </View>
      <View style={{ ...ChatStyles.chat, width: 203 }}>
        <Text style={{ color: "white", marginTop: 3 }}>Masih kenal gw ga?</Text>
        <Text
          style={{
            color: "#B0AFAF",
            fontSize: 9,
            marginLeft: 155,
            marginTop: -10,
          }}
        >
          20.17
        </Text>
      </View>
      <View style={{ ...ChatStyles.chat2, width: 257, marginLeft: 105 }}>
        <Text style={{ color: "white", marginTop: 3 }}>
          Masih dong, lu ucup kan ?
        </Text>
        <Text
          style={{
            color: "#B0AFAF",
            fontSize: 9,
            marginLeft: 210,
            marginTop: -10,
          }}
        >
          20.30
        </Text>
      </View>
      <View style={{ ...ChatStyles.chat, width: 182 }}>
        <Text style={{ color: "white", marginTop: 3 }}>Bapak gw anjirrr</Text>
        <Text
          style={{
            color: "#B0AFAF",
            fontSize: 9,
            marginLeft: 135,
            marginTop: -10,
          }}
        >
          20.17
        </Text>
      </View>
      <View style={ChatStyles.row2}>
        <View style={ChatStyles.input}>
          <Icons name="happy" size={24} color={"#6E9CE3"} />
          <Text style={{ color: "#6E9CE3", marginLeft: 11 }}>Messages</Text>
          <Icons
            name="attach"
            size={24}
            color={"#6E9CE3"}
            style={{ marginLeft: 80 }}
          />
          <Icons
            name="camera"
            size={24}
            color={"#6E9CE3"}
            style={{ marginLeft: 10 }}
          />
        </View>
        <View style={ChatStyles.voice}>
          <Icons name="mic" size={24} color={"#6E9CE3"} />
        </View>
      </View>
    </ScrollView>
  );
}
