import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import Server from "src/constants/ServerUrl";
import { useAccountStore, useModulesStore, useSessionStore } from "src/store";

const { clearAccount } = useAccountStore.getState();
const { clearModules } = useModulesStore.getState();
const { clearSession } = useSessionStore.getState();
export const post = async (operation, body, host) => {
  const session = await AsyncStorage.getItem("session");
  const version = Constants.expoConfig.version;

  const formData = {
    _operation: operation,
    _session: session,
    ...body,
  };

  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };

  const requestOptions = {
    method: "POST",
    cache: "no-cache",
    credentials: "include",
    headers,
    body: JSON.stringify(formData),
  };

  const urlRealtime = `${Server.realtime}/erp-api/api`;
  const url = host === "realtime" ? urlRealtime : `${Server.value}/modules/erp-api/api.php?v=${version}`;

  const response = await fetch(url, requestOptions);
  const data = await response.json();

  if ((data && data.error && data.error.message === "Login required") || (!session && operation !== "loginAndFetchModules")) {
    clearAccount();
    clearModules();
    clearSession();
    await AsyncStorage.clear();
    return "Logout";
  }

  return data;
};
