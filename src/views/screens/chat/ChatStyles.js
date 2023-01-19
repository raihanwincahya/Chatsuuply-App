import { StyleSheet } from "react-native";
const ChatStyles = StyleSheet.create({
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
  placeholder: {
    width: 300,
    height: 50,
    borderRadius: 20,
    borderColor: "#8FB3EA",
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginVertical: 30,
  },
  bubble: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#C5DCFF",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#8FB3EA",
    width: 393,
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  h1: {
    fontSize: 25,
    color: "#567FBE",
  },
  chat: {
    width: 140,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#88A1C9",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginLeft: 30,
    marginTop: 20,
  },
  chat2: {
    width: 115,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#D3E0F4",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginLeft: 245,
    marginTop: 30,
  },
  input: {
    width: 275,
    height: 50,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginLeft: 30,
    marginTop: 350,
    marginBottom: 15,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    shadowColor: "#567FBE",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5,
  },
  voice: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginLeft: 10,
    marginTop: 350,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#567FBE",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default ChatStyles;