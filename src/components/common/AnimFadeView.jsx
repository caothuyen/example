import { memo, useEffect } from "react";
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from "react-native-reanimated";

function AnimFadeView({ children, style, initOpacity = 0, duration = 170, delay = 0 }) {
  const opacity = useSharedValue(initOpacity);

  useEffect(() => {
    opacity.value = withTiming(1, { duration, delay });
  }, [opacity, delay, duration]);

  const animatedStyle = useAnimatedStyle(() => ({ opacity: opacity.value }));

  return <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>;
}

export default memo(AnimFadeView);
