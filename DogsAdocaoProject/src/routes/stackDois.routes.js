import { createNativeStackNavigator } from "@react-navigation/native-stack";

// chamando as paginas
import PageInicial from "../pages/Inicio";
import Loggedin from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";
import Descricao from "../pages/Descricao";
import Brinquedos from "../pages/Brinquedos";

export default function StackRoutesDois() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={PageInicial} />

      <Stack.Screen name="Cadastro" component={Cadastro} />

      <Stack.Screen name="Login" component={Loggedin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Descrição" component={Descricao} />
      <Stack.Screen name="Brinquedos" component={Brinquedos} />
    </Stack.Navigator>
  );
}
