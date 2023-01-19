import { StyleSheet } from "react-native";
const HomeStyles = StyleSheet.create({
  container: {
    padding: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#567FBE",
    justifyContent: "center",
    alignItems: "center",
  },
  circleImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#567FBE",
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    color: '#CCCCCC',
  },
  h1: {
    fontSize: 25,
    color: "#567FBE",
  },
  h2: {
    fontSize: 14,
    fontWeight: '500'
  },
  line: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
    width: 300,
    marginTop: 10,
    marginBottom: 15
  }
});

export default HomeStyles;
