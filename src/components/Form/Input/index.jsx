import { useRef, useCallback, forwardRef, memo, useState } from "react";
import { TextInput, View, Text } from "react-native";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-native-fontawesome";
import { colors } from "src/global/appStyles";
import styles from "./style";

const Input = forwardRef(({ style, onFocus, onBlur, iconLeft, iconRight, error, disabled, ...props }, ref) => {
  const containerRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Handle focus
  const handleFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, []);

  // Handle blur
  const handleBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, []);

  // Render icon
  const renderIcon = useCallback((icon) => {
    return typeof icon === "string" ? <FaIcon icon={icon} size={16} color={colors.dark_gray} /> : icon || null;
  }, []);

  const statusStyle = [isFocused ? styles.focus : styles.blur, error && styles.error, disabled && styles.disabled];
  const containerStyle = [styles.container, ...statusStyle];

  return (
    <>
      <View ref={containerRef} style={containerStyle}>
        {iconLeft && renderIcon(iconLeft)}
        <TextInput
          {...props}
          ref={ref}
          style={[styles.appInput, style]}
          allowFontScaling={false}
          autoComplete="off"
          autoCorrect={false}
          autoCapitalize="none"
          spellCheck={false}
          placeholderTextColor={colors.dark_gray}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
        />
        {error && <FaIcon icon="fa-circle-exclamation" size={16} color={colors.error} />}
        {iconRight && renderIcon(iconRight)}
      </View>
      {error?.message && <Text style={styles.errorText}>{error?.message}</Text>}
    </>
  );
});

export default memo(Input);
