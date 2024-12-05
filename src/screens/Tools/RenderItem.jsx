import { memo } from "react";
import { View, Text } from "react-native";
import AnimPress from "src/components/common/AnimPress";
import styles from "./styles";

function RenderItem({ icon, name, label, onPressItem }) {
  return (
    <AnimPress style={styles.menuItemContainer} onPress={() => onPressItem(name)}>
      <View style={styles.menuItem}>
        {icon}
        <Text style={styles.menuItemLabel}>{label}</Text>
      </View>
    </AnimPress>
  );
}

export default memo(RenderItem);
