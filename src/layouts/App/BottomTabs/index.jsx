import { useCallback } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { bottomTabs } from "src/routers/constants";
import RenderTabItem from "./RenderTabItem";
import styles from "./styles";

const Tab = createBottomTabNavigator();

function BottomTabs(props) {
  const { RenderHeader } = props;

  // Render tab bar
  const RenderTabBar = useCallback(
    (tabs) => (
      <View style={styles.container}>
        {tabs.state.routes.map((route, index) => (
          <RenderTabItem key={route.key} index={index} route={route} {...tabs} />
        ))}
      </View>
    ),
    []
  );

  return (
    <Tab.Navigator
      screenOptions={{
        header: RenderHeader,
        gestureEnabled: false,
        animation: "shift",
        transitionSpec: { animation: "timing", config: { duration: 100 } },
      }}
      tabBar={(props) => <RenderTabBar {...props} />}
      detachInactiveScreens={false}>
      {bottomTabs.map(({ name, title, component, icon, options }) => (
        <Tab.Screen key={name} name={name} component={component} options={{ title, icon, ...options }} />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabs;
