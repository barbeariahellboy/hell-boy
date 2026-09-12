import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe suas telas aqui
import HomeScreen from '../screens/home/Home';
import AboutScreen from '../screens/about/About';
import ContactScreen from '../screens/contacts/Contacts';
import ServicesScreen from '../screens/services/Services';
import GalleryScreen from '../screens/gallery/Gallery';
import SchedulingScreen from '../screens/scheduling/Scheduling';

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
          name="Sobre" 
          component={AboutScreen} 
          options={{ title: 'Sobre Nós' }} 
        />
        <Stack.Screen 
          name="Contato" 
          component={ContactScreen} 
          options={{ title: 'Contato' }} 
        />
        <Stack.Screen 
          name="Serviços" 
          component={ServicesScreen} 
          options={{ title: 'Nossos Serviços' }} 
        />
        <Stack.Screen 
          name="Galeria" 
          component={GalleryScreen} 
          options={{ title: 'Galeria' }} 
        />
        <Stack.Screen 
          name="Agendamento" 
          component={SchedulingScreen} 
          options={{ title: 'Agendamento' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}