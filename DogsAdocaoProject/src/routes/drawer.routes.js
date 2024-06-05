import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

// chamando as paginas
import PageInicial from "../pages/Inicio";
import Loggedin from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import StackRoutes from "./stack.routes";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Carrinho from "../pages/Carrinho";


import CustomDrawer from "../components/CustomDrawer";

export default function DrawerRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveTintColor: "#EFB758",
        drawerInactiveTintColor: "white",
        headerTintColor: "#17395C",
        drawerStyle: {
          borderBottomRightRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#17395C",
        },
        headerShown: true

      }}
    >


      <Drawer.Screen
        name="Começo"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="smartphone" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="info" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="shopping-cart" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}
