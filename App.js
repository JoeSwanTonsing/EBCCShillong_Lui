import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

//my components & nav_stacks
import DrawerContent from './src/navigation/DrawerContent';
import FeedsStack from './src/navigation/FeedsStack';
import HomeStack from './src/navigation/HomeStack';
import VideosStack from './src/navigation/VideosStack';
import PhotosStack from './src/navigation/PhotosStack';

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
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Videos" component={VideosStack} />
            <Drawer.Screen name="Photos" component={PhotosStack} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
