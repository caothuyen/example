import { memo, useCallback } from "react";
import { Text, View } from "react-native";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-native-fontawesome";
import AnimPress from "src/components/common/AnimPress";
import styles from "./styles";

function RenderTabItem({ route, descriptors, state, navigation, index }) {
  const { name, key } = route;
  const { options } = descriptors[route.key];
  const isFocused = state.index === index;
  const color = isFocused ? "#2275FF" : "#A0AEC0";

  // Handle press
  const handlePress = useCallback(() => navigation.navigate(name), [name]);

  return (
    <AnimPress key={key} onPress={handlePress} style={styles.tabItemContainer}>
      <View style={styles.tabItem}>
        {/* <View style={styles.tabBadge}>
        <Text style={styles.tabBadgeText} numberOfLines={1}>9</Text>
      </View> */}
        <FaIcon style={styles.tabIcon} icon={options.icon} color={color} size={20} />
        <Text style={[styles.tabLabel, { color }]}>{options.title}</Text>
      </View>
    </AnimPress>
  );
}

export default memo(RenderTabItem);
