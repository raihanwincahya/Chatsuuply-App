import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import HomeStyles from "../HomeStyles";
import Feather from "react-native-vector-icons/Feather";
import Img1 from "../../../../assets/img1.png";
import Img2 from "../../../../assets/img2.png";
import Img3 from "../../../../assets/img3.png";
import Img4 from "../../../../assets/img4.png";
import Img5 from "../../../../assets/img5.png";
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={{...HomeStyles.row, marginTop: 20}}>
        <Text style={HomeStyles.h1}>Explore</Text>
        <TouchableOpacity
          style={HomeStyles.circle}
          onPress={() => navigation.navigate("Post")}
        >
          <Feather name="plus" size={30} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <View style={{ ...HomeStyles.row, marginTop: 30 }}>
        <View style={{ alignItems: "center" }}>
          <View style={HomeStyles.circleImg}>
            <Image source={Img1} />
          </View>
          <Text style={HomeStyles.username}>Story</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={HomeStyles.circleImg}>
            <Image source={Img2} />
          </View>
          <Text style={HomeStyles.username}>Michael</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={HomeStyles.circleImg}>
            <Image source={Img3} />
          </View>
          <Text style={HomeStyles.username}>Engeline</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={HomeStyles.circleImg}>
            <Image source={Img4} />
          </View>
          <Text style={HomeStyles.username}>Lusiana</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={HomeStyles.circleImg}>
            <Image source={Img5} />
          </View>
          <Text style={HomeStyles.username}>Emely</Text>
        </View>
      </View>
      <View style={HomeStyles.line}></View>
    </View>
  );
}
