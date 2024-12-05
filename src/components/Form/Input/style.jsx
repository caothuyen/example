import { StyleSheet } from "react-native";
import { colors } from "src/global/appStyles";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    borderWidth: 1,
    borderColor: colors.border,
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 14,
  },

  appInput: {
    flex: 1,
    height: "100%",
    color: colors.text,
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },

  disabled: {
    backgroundColor: colors.background_disabled,
  },

  blur: {
    borderColor: colors.border,
  },

  focus: {
    borderColor: colors.border_focused,
  },

  error: {
    borderColor: colors.error,
  },

  errorText: {
    color: colors.error,
    fontSize: 12,
    fontFamily: "Roboto-Regular",
  },
});
