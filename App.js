import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

//my components & Screens
import DrawerContent from './src/navigation/DrawerContent';
import FeedsStack from './src/navigation/FeedsStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Feeds"
            drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Feeds" component={FeedsStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
