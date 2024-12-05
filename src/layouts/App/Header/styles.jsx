import { StyleSheet } from "react-native";
import { colors } from "src/global/appStyles";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  groupLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  backIcon: {
    color: colors.text,
  },

  title: {
    fontSize: 18,
    fontFamily: "Roboto-Medium",
    color: colors.text,
  },
});
