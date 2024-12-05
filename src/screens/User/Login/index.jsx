import React from "react";
import { Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Constants from "expo-constants";
import LogoLine from "assets/images/login/logo-line.svg";
import NetworkLine from "assets/images/login/network-line.svg";
import RenderForm from "./RenderForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import styles from "./style";

function LoginScreen() {
  const version = Constants.expoConfig.version;

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <LinearGradient
          colors={["#114395", "#195DCE", "#1F6BF2", "#0A89E2", "#fff"]}
          locations={[0, 0.135, 0.36, 0.45, 0.625]}
          style={[styles.background, styles.backgroundLinear]}
        />
        <LogoLine style={[styles.logoLine, styles.background]} />
        <NetworkLine style={[styles.networkLine, styles.background]} />
      </View>

      <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image source={require("assets/images/icon.png")} style={styles.logo} fadeDuration={0} />
          <Text style={styles.title}>Chào mừng đến với Quốc Duy</Text>
          <RenderForm />
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Phiên bản v{version}</Text>
      </View>
    </View>
  );
}

export default LoginScreen;
