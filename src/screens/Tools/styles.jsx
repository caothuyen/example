import { StyleSheet } from "react-native";
import { colors } from "src/global/appStyles";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
    justifyContent: "center",
  },

  block: {
    marginBottom: 10,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingBottom: 30,
    borderRadius: 16,
    boxShadow: "0 3.5px 5.5px #00000005",
  },

  blockLabel: {
    fontSize: 14,
    fontFamily: "Roboto-Medium",
    marginBottom: 20,
    paddingHorizontal: 20,
    color: colors.text,
  },

  menuList: {
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 30,
  },

  menuItemContainer: {
    width: "33.33%",
  },

  menuItem: {
    alignItems: "center",
    gap: 5,
  },

  menuItemLabel: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    color: colors.text_secondary,
    paddingHorizontal: 15,
    lineHeight: 20,
  },
});
