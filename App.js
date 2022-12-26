import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';

import HomeScreen from './screens/HomeScreen';
import RestrauntScreen from './screens/RestrauntScreen';
import BasketScreen from './screens/BasketScreen';

import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Provider store={store}>
    <TailwindProvider>
    <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Restraunt" component={RestrauntScreen} />
    <Stack.Screen name="Basket" component={BasketScreen} 
      options={{ presentation: "modal", headerShown: false}}
    />
    </Stack.Navigator>
    </TailwindProvider>
    </Provider>
    </NavigationContainer>
  );
}
