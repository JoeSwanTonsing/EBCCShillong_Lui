import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
// import Share from 'react-native-share';
// import files from '../assets/fileBase64';

export default function DrawerContent(props) {
  // const openProject = () => {
  //   Linking.openURL('https://joeswantonsing.github.io/ExpMan/').catch((err) =>
  //     console.error("Couldn't load page", err),
  //   );
  // };

  // const myCustomShare = async () => {
  //   const shareOptions = {
  //     message:
  //       "Hi! Track and Manage your expenses with this amazing free app called ExpMan! It\'s free and opensourced. Install it now.",
  //     url: files.appIcon,
  //   };
  //
  //   try {
  //     const shareResponse = await Share.open(shareOptions);
  //     //get os platform from which user is using to share the app:
  //     console.log(JSON.stringify(shareResponse));
  //   } catch (e) {
  //     console.log('Error => ', e);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={[styles.headerContainer, styles.separator]}>
          <Image
            style={styles.headerImage}
            source={require('../assets/logo.png')}
          />
          <View style={styles.headerTitles}>
            <Text style={styles.headerTitleText}>EBCC Shillong</Text>
          </View>
        </View>
        <View style={[styles.menuContainer, styles.separatorLight]}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Home')}>
            <Icon name="home-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Feeds')}>
            <Icon name="newspaper-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Feeds</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.menuContainer, styles.separatorLight]}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Videos')}>
            <Icon name="videocam-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Video Te</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Photos')}>
            <Icon name="image-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Lemlak Te</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="bar-chart-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Monthly Report</Text>
          </TouchableOpacity>*/}
          {/*<TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="star-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Rate App</Text>
          </TouchableOpacity>*/}
          {/*<TouchableOpacity
            style={styles.menuItem}
            onPress={() => myCustomShare()}>
            <Icon
              name="share-social-outline"
              size={25}
              style={styles.itemIcon}
            />
            <Text style={styles.itemTitle}>Share App</Text>
          </TouchableOpacity>*/}
          {/*<TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="cog-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon name="shield-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>Privacy Policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => props.navigation.navigate('Dashboard')}>
            <Icon
              name="chatbubble-ellipses-outline"
              size={25}
              style={styles.itemIcon}
            />
            <Text style={styles.itemTitle}>Feedback</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={openProject}>
            <Icon name="globe-outline" size={25} style={styles.itemIcon} />
            <Text style={styles.itemTitle}>See Project</Text>
          </TouchableOpacity>*/}
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Text>Version 1.0.1</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  //33415C
  headerContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    height: 100,
    width: 100,
    resizeMode: 'cover',
  },
  headerTitles: {
    flex: 1,
  },
  headerTitleText: {
    flex: 1,
    color: '#002855',
    fontWeight: 'bold',
    flexWrap: 'wrap',
    fontSize: 20,
    lineHeight: 30,
  },
  menuContainer: {
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
  },
  itemIcon: {
    color: '#001845',
    marginRight: 7,
  },
  itemTitle: {
    color: '#001845',
    marginLeft: 7,
  },
  separator: {
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  separatorLight: {
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  //272f3f
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
