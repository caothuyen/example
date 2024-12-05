import { memo } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import { colors } from "src/global/appStyles";

function Loading({ size = 50, color = colors.info, containerStyle, style }) {
  return (
    <View style={{ width: size, height: size, ...containerStyle }}>
      <LottieView
        source={require("/assets/lotties/loading.json")}
        style={{ height: size, width: size, ...style }}
        colorFilters={[{ keypath: "*", color }]}
        autoPlay
        loop
      />
    </View>
  );
}

export default memo(Loading);
