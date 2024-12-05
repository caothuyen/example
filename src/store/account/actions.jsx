import { post } from "../method";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAccountStore, useModulesStore, useSessionStore } from "src/store";

const { setAccount, clearAccount } = useAccountStore.getState();
const { setModules, clearModules } = useModulesStore.getState();
const { setSession, clearSession } = useSessionStore.getState();

// Login and fetch modules
export const Login = async (username, password) => {
  const data = await post("loginAndFetchModules", { username, password });

  if (data.success) {
    const { login, modules } = data.result;
    await AsyncStorage.setItem("session", login.session);

    const resUser = await post("userInfo", {});
    const { userinfo } = resUser.result || {};

    setSession(login.session);
    setAccount(userinfo);
    setModules(modules);

    return data;
  }

  return data;
};

// Get user info
export const GetUserInfo = async () => {
  const data = await post("userInfo", {});

  if (data && data.success) {
    const { userinfo } = data.result;
    setAccount(userinfo);
    return userinfo;
  }
};

// Logout
export const Logout = async () => {
  const session = await AsyncStorage.getItem("session");

  if (session) {
    clearSession();
    clearAccount();
    clearModules();
    const data = await post("logout", { _session: session });
    return data;
  }
};
