import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe suas telas aqui
import HomeScreen from '../screens/HomeScreen';
import AgendamentoScreen from '../screens/AgendamentoScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#121212' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#121212' }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Início' }} 
        />
        <Stack.Screen 
          name="Agendamento" 
          component={AgendamentoScreen} 
          options={{ title: 'Novo Agendamento' }} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Meu Perfil' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}