import { View, Text, Image } from "react-native";
import React from "react";
import HomeStyles from "../HomeStyles";
import Img6 from "../../../../assets/img6.png";
import Img7 from "../../../../assets/img7.png";
import Icons from "react-native-vector-icons/Ionicons";

export default function Feed() {
  return (
    <View>
      <View style={HomeStyles.row2}>
        <View style={HomeStyles.circleImg}>
          <Image source={Img6} />
        </View>
        <View style={{ marginLeft: 20 }}>
          <Text>Nettie Fernandez</Text>
          <Text style={{ color: "#ACABAB" }}>Just now</Text>
        </View>
      </View>
      <Image source={Img7} style={{ marginVertical: 20, borderRadius: 20 }} />
      <Text style={HomeStyles.h2}>
        It’s my favourite character in this anime, are you ?
      </Text>
      <View style={{...HomeStyles.row, marginTop: 18, marginBottom: 10}}>
        <Icons name="heart" size={24} color={"#E52323"} />
        <Text style={{marginLeft: -80}}>456</Text>
        <Icons name="chatbubbles" size={24} color={"#D9D9D9"} />
        <Text style={{marginLeft: -80}}>100</Text>
        <Icons name="send" size={24} color={"#373737"} />
      </View>
    </View>
  );
}
