import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

//Screen
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export default function HomeStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2A9D8F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Text>MENU</Text>
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
