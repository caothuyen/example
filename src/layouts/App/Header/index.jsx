import { memo, useCallback } from "react";
import { View, Text, StatusBar, Platform } from "react-native";
import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-native-fontawesome";
import AnimPress from "src/components/common/AnimPress";
import styles from "./styles";

function Header(props) {
  const { back, insets, navigation, title, headerStyles } = props;

  const statusBarHeight = Platform.select({ ios: insets?.top, android: StatusBar.currentHeight });
  const styleContainer = { paddingTop: statusBarHeight, height: 45 + statusBarHeight };

  const onBack = useCallback(() => back && navigation.goBack(), [back, navigation]);

  return (
    <View style={[styles.container, styleContainer, headerStyles?.container]}>
      <AnimPress onPress={onBack} disabled={!back}>
        <View style={styles.groupLeft}>
          {back && <FaIcon style={[styles.backIcon, headerStyles?.backIcon]} icon="fa-chevron-left" size={18} />}
          <Text style={[styles.title, headerStyles?.title]}>{title}</Text>
        </View>
      </AnimPress>
    </View>
  );
}

export default memo(Header);
