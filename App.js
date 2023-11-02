import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, VStack } from 'native-base';
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from './screens/Home.js';
import AfterAddScreen from './screens/After_add.js'


function Back() {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Back</Text>
    </View>
); 
}






const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Back" component={Back}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="AfterAdd" component={AfterAddScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}