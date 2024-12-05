import { memo, useMemo } from "react";
import { View, Text } from "react-native";
import AnimFadeView from "src/components/common/AnimFadeView";
import RenderItem from "./RenderItem";
import { getModuleInfo } from "src/global/appGlobal";
import styles from "./styles";

function RenderBlock({ item: { label, data }, index, onPressItem }) {
  const initOpacity = index === 0 ? 1 : 0.5;
  const duration = index === 0 ? 0 : 250;

  // Filter valid modules
  const validModules = useMemo(() => {
    return data
      .map(({ module, ...rest }) => {
        const moduleInfo = getModuleInfo(module);
        return moduleInfo?.permission?.listViewable ? { ...rest, ...moduleInfo } : null;
      })
      .filter(Boolean);
  }, [data]);

  // Render
  if (!validModules.length) return null;

  return (
    <AnimFadeView style={styles.block} initOpacity={initOpacity} duration={duration}>
      <Text style={styles.blockLabel}>{label}</Text>
      <View style={styles.menuList}>
        {validModules.map((item) => (
          <RenderItem key={item.name} {...item} onPressItem={onPressItem} />
        ))}
      </View>
    </AnimFadeView>
  );
}

export default memo(RenderBlock);
