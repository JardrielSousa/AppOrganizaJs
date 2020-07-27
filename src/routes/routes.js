import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App from "../pages/App";
import Produto from "../pages/produto";
import Financeiro from "../pages/financeiro/financeiro";
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      headerMode="screen"
    >
      <Tab.Screen
        name="Home"
        component={App}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        name="Produto"
        component={Produto}
        options={{
          title: 'Produto',
        }}
      />
      <Tab.Screen
        name="Financeiro"
        component={Financeiro}
        options={{
          title: 'Financeiro',
        }}
      />
    </Tab.Navigator>
  );
}

export default MyStack;
