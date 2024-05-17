import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";


// chamando as paginas
import PageInicial from "../pages/Inicio";



export default function DrawerRoutes() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerActiveTintColor: "#EFB758",
                drawerInactiveTintColor: 'white',
                headerTintColor: '#17395C',
                drawerStyle: {
                    borderRadius: 5,
                    backgroundColor: '#17395C'
                },

            }}>


            <Drawer.Screen

                name="Inicio"
                component={PageInicial}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Feather name="home" color={color} size={size} />
                    ),
                    drawerLabel: "Inicio",


                }}
            />



        </Drawer.Navigator>
    )

}

