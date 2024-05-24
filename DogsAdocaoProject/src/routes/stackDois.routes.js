import { createNativeStackNavigator } from "@react-navigation/native-stack";

// chamando as paginas
import PageInicial from "../pages/Inicio";
import Loggedin from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

export default function StackRoutesDois() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Contato" component={Contato} />
    </Stack.Navigator>
  );
}
