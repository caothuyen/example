import { useEffect } from "react";
import { View } from "react-native";
import { getModuleInfo } from "src/global/appGlobal";
import Loading from "src/components/Loading";

function ListScreen(props) {
  const { navigation, route } = props;

  const { module } = route.params;

  useEffect(() => {
    // const moduleInfo = getModuleInfo(module);
    navigation.setOptions({ headerTitle: module });
  }, []);

  return <View>{/* <Loading size={100} /> */}</View>;
}

export default ListScreen;
