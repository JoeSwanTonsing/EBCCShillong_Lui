import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Screen
import PhotosScreen from '../screens/photos/PhotosScreen';

const Stack = createStackNavigator();

export default function PhotosStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#084B83',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#084B83"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
      }}>
      <Stack.Screen
        name="Lemlak"
        component={PhotosScreen}
        options={{title: 'Lemlak te'}}
      />
    </Stack.Navigator>
  );
}
