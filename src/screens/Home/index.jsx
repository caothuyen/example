import { Text, View, StyleSheet, Button } from "react-native";
import { useAccountStore, useModulesStore } from "src/store";
import { GetUserInfo, Logout } from "src/store/account/actions";

function HomeScreen(props) {
  const { account } = useAccountStore();
  const { modules } = useModulesStore();

  const handleUserInfo = async () => {
    const data = await GetUserInfo();
    console.log("User Info Data:", data);
  };

  const handleLogout = async () => {
    const data = await Logout();
    console.log("Logout Data:", data);
  };

  return (
    <View style={[styles.container, styles.center]}>
      <Text>Home</Text>
      <Text>User Name: {account.username}</Text>
      <Text>Modules Count: {modules.length}</Text>
      <Button title="UserInfo" onPress={handleUserInfo} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
