import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { useSessionStore } from "src/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "src/layouts/App/Header";
import BottomTabs from "src/layouts/App/BottomTabs";
import LoginScreen from "src/screens/User/Login";
import { screens } from "./constants";

const Stack = createStackNavigator();

// Config animation
const config = {
  animation: "spring",
  config: {
    stiffness: 170,
    damping: 10,
    mass: 0.5,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    useNativeDriver: true,
  },
};

const defaultOptions = {
  // animation: "slide_from_right",
  ...TransitionPresets.SlideFromRightIOS,
  // transitionSpec: { open: config, close: config },
};

function Routers() {
  const { session } = useSessionStore();
  const insets = useSafeAreaInsets();

  // Render header
  const RenderHeader = useCallback((props) => {
    const { back, navigation, route, options } = props;
    const { headerStyles } = options || {};
    const title = getHeaderTitle(options, route.name);
    const headerProps = { back: back?.title, navigation, route, title, headerStyles, insets };
    return <Header {...headerProps} />;
  }, []);

  // Render login screen
  const RenderLoginScreen = useCallback((props) => {
    return <LoginScreen {...props} insets={insets} />;
  }, []);

  // Render bottom tabs
  const RenderBottomTabs = useCallback((props) => {
    return <BottomTabs {...props} RenderHeader={RenderHeader} />;
  }, []);

  return (
    <View style={{ flex: 1, marginBottom: insets.bottom }}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
          {/* Login screen */}
          {!session ? (
            <Stack.Screen
              name="Login"
              component={RenderLoginScreen}
              options={{ ...defaultOptions, animation: "slide_from_left" }}
            />
          ) : (
            <>
              {/* Bottom tab */}
              <Stack.Screen name="BottomTab" component={RenderBottomTabs} options={defaultOptions} />

              {/* All screens */}
              {screens.map(({ name, title, component, options }) => (
                <Stack.Screen
                  key={name}
                  name={name}
                  component={component}
                  options={{ headerShown: true, header: RenderHeader, title, ...defaultOptions, ...options }}
                />
              ))}
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Routers;
