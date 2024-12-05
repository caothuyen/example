import { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import RenderBlock from "./RenderBlock";
import Tools from "src/constants/Tools";
import styles from "./styles";

function ToolScreen(props) {
  const { navigation } = props;
  const [data, setData] = useState([]);

  // Delay loading blocks (30ms)
  useEffect(() => {
    const loadTools = async () => {
      for (let i = 0; i < Tools.length; i++) {
        setData((prev) => [...prev, Tools[i]]);
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
    };
    const timeout = setTimeout(() => loadTools(), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Handle press item
  const onPressItem = useCallback((module) => {
    const { screens } = require("src/routers/constants");
    const hasModuleScreen = screens.find((screen) => screen.name === `ListScreen_${module}`);
    navigation.navigate(hasModuleScreen ? `ListScreen_${module}` : "ListScreen", { module });
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        showsVerticalScrollIndicator={false}
        data={data}
        estimatedItemSize={330}
        renderItem={(item) => <RenderBlock {...item} onPressItem={onPressItem} />}
        keyExtractor={(_, index) => `block-${index}`}
      />
    </View>
  );
}

export default ToolScreen;
