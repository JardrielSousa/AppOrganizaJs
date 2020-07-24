import { createStackNavigator } from '@react-navigation/stack';

import App from "../pages/App";
import Sobre from "../pages/sobre";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
    >
      <Stack.Screen
        name="Home"
        component={App}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: 'Sobre',
        }}
      />
    </Stack.Navigator>
  );
}