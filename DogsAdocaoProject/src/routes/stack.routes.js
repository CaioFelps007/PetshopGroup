import { createNativeStackNavigator } from "@react-navigation/native-stack";

// chamando as paginas
import PageInicial from "../pages/Inicio";
import Loggedin from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Brinquedos from "../pages/Brinquedos";
import Racoes from "../pages/Racoes";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={PageInicial} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Loggedin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Brinquedos" component={Brinquedos} />
      <Stack.Screen name="Rações" component={Racoes} />
    </Stack.Navigator>
  );
}
