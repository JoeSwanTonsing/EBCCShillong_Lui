import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Screen
import FeedsScreen from '../screens/feeds/FeedsScreen';

const Stack = createStackNavigator();

export default function FeedsStack({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#00ABE7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={30}
            backgroundColor="#00ABE7"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        ),
      }}>
      <Stack.Screen name="Feeds" component={FeedsScreen} />
    </Stack.Navigator>
  );
}
