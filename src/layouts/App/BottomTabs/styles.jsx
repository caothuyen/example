import { StyleSheet } from "react-native";
import { colors } from "src/global/appStyles";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 65,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    paddingHorizontal: 5,
  },

  tabItemContainer: {
    width: "20%",
    justifyContent: "center",
  },

  tabItem: {
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  tabIcon: {
    marginBottom: 5,
    marginTop: 13,
  },

  tabLabel: {
    fontSize: 11,
    fontFamily: "Roboto-Regular",
  },

  tabBadge: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 7,
    right: 22,
    backgroundColor: "#F53640",
    paddingHorizontal: 5,
    borderRadius: 100,
    minWidth: 20,
    height: 20,
    zIndex: 100,
    borderWidth: 2,
    borderColor: "white",
  },

  tabBadgeText: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#fff",
    lineHeight: 13,
    maxWidth: 15,
  },
});
