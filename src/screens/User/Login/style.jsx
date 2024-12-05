import { StyleSheet, Dimensions } from "react-native";
import { colors } from "src/global/appStyles";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  background: {
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  backgroundLinear: { minHeight: height },

  logoLine: { left: 0 },

  networkLine: { right: 0 },

  starLine: { right: 0, left: 0 },

  content: {
    alignItems: "center",
    flex: 1,
    gap: 20,
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 140,
  },

  logo: {
    width: 130,
    height: 130,
    borderRadius: 33,
    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.05)",
  },

  title: { fontSize: 22, fontFamily: "Roboto-Bold", color: "#fff" },

  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 26,
    padding: 20,
    gap: 20,
  },

  fieldWrapper: { gap: 10 },

  fieldLabel: { fontSize: 14, fontFamily: "Roboto-Regular", color: colors.text_secondary },

  fieldError: { fontSize: 12, fontFamily: "Roboto-Regular", color: colors.error },

  buttonSubmit: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: colors.info,
    height: 48,
    width: "100%",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonSubmitText: { fontSize: 16, fontFamily: "Roboto-Medium", color: "#fff" },

  buttonSubmitDisabled: { backgroundColor: colors.dark_gray },

  messageErrorContainer: {
    backgroundColor: colors.background_error,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },

  messageError: { fontSize: 14, fontFamily: "Roboto-Regular", color: colors.error, lineHeight: 20 },

  footer: { alignItems: "center", justifyContent: "center" },

  footerText: {
    fontSize: 12,
    fontFamily: "Roboto-Regular",
    color: colors.text_secondary,
    paddingVertical: 10,
  },
});
