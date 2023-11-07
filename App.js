import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
// import { Ionicons } from '@expo/vector-icons';
import HomeUserScreen from './screens/HomeUser.js';
import AfterAddScreen from './screens/After_add.js';
import AddJobScreen from './screens/AddJob.js';
import HomeCompanyScreen from './screens/HomeCompany.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeCompanyScreen">
          <Stack.Screen name="HomeUserScreen" component={HomeUserScreen} options={{ headerShown: true }} />
          <Stack.Screen name="HomeCompanyScreen" component={HomeCompanyScreen} options={{ headerShown: true }} />
          <Stack.Screen name="AddJobScreen" component={AddJobScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AfterAddScreen" component={AfterAddScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}