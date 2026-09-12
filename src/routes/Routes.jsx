// src/routes/Routes.jsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/header/Header';

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
          // Usa o seu Header customizado em todas as telas
          header: () => <Header />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Serviços" component={ServicesScreen} />
        <Stack.Screen name="Sobre" component={AboutScreen} />
        <Stack.Screen name="Galeria" component={GalleryScreen} />
        <Stack.Screen name="Agendamento" component={SchedulingScreen} />
        <Stack.Screen name="Contato" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}