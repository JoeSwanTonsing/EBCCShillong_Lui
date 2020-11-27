import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Screen
import ThuthakScreen from '../screens/thuthak/ThuthakScreen';

const Stack = createStackNavigator();

export default function ThuthakStack({navigation}) {
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
        name="Thuthak"
        component={ThuthakScreen}
        options={{title: 'Thu Thak'}}
      />
    </Stack.Navigator>
  );
}
