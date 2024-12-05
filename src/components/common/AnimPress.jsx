import { memo, useCallback } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { BaseButton, RectButton, State } from "react-native-gesture-handler";

function AnimPress({ children, style, onPress, disabled, duration = 60 }) {
  const pressed = useSharedValue(false);

  const onHandlerStateChange = useCallback(
    ({ nativeEvent }) => {
      if (disabled) return;
      const isActive = nativeEvent.state === State.ACTIVE || nativeEvent.state === State.BEGAN;
      pressed.value = isActive;
    },
    [disabled, pressed]
  );

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 0.85 : 1, { duration }) }],
    opacity: withTiming(pressed.value ? 0.8 : 1, { duration }),
  }));

  return (
    <Animated.View style={[animatedStyles, style]} accessible accessibilityRole="button">
      <RectButton
        onPress={disabled ? () => {} : onPress}
        onHandlerStateChange={onHandlerStateChange}
        rippleRadius={0}
        activeOpacity={0}
        disabled={disabled}>
        {children}
      </RectButton>
    </Animated.View>
  );
}

export default memo(AnimPress);
