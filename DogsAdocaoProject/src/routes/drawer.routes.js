import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";

// chamando as paginas
import PageInicial from "../pages/Inicio";
import Loggedin from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import StackRoutes from "./stack.routes";
import Home from "../pages/Home";
import StackRoutesDois from "./stackDois.routes";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Carrinho from "../pages/carrinho";

export default function DrawerRoutes() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: "#EFB758",
        drawerInactiveTintColor: "white",
        headerTintColor: "#17395C",
        drawerStyle: {
          borderRadius: 5,
          backgroundColor: "#17395C",
        },
      }}
    >
      <Drawer.Screen
        name="Inicio"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "Login e Cadastro",
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Home"
        component={StackRoutes}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />

      <Drawer.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}
