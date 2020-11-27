import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Screen
import VideosScreen from '../screens/videos/VideosScreen';

const Stack = createStackNavigator();

export default function VideosStack({navigation}) {
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
        name="Videos"
        component={VideosScreen}
        options={{title: 'Video te'}}
      />
    </Stack.Navigator>
  );
}
