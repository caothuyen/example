import HomeScreen from "src/screens/Home";
import ProfileScreen from "src/screens/User/ProfileScreen";
import ToolScreen from "src/screens/Tools";
import ListScreen from "src/screens/List";
import ListViewProductsScreen from "src/screens/List/Modules/Products";
import { colors } from "src/global/appStyles";

export const bottomTabs = [
  {
    name: "HomeScreen",
    title: "Trang chủ",
    icon: "fa-house",
    component: HomeScreen,
    options: { headerTitle: "QUOC DUY APP", headerStyles: { title: { color: colors.info } } },
  },
  { name: "MessageScreen", title: "Tin nhắn", icon: "fa-message", component: ProfileScreen },
  { name: "QRScanScreen", title: "QR Scan", icon: "fa-qrcode", component: ProfileScreen },
  { name: "BoardScreen", title: "Bảng tin", icon: "fa-heart", component: ProfileScreen },
  { name: "ToolScreen", title: "Công cụ", icon: "fa-layer-group", component: ToolScreen },
];

export const screens = [
  { name: "ListScreen", title: "List", component: ListScreen },
  { name: "ListScreen_Products", title: "List Products", component: ListViewProductsScreen },
];
