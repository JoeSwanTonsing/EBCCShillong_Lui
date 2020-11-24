import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.paragraph}>H E L L O   H O M E S C R E E N </Text>
          <Text style={styles.paragraph}>
            Display Latest Uploads from YouTube, Posts from Facebook and Photos
            from Instagram separately, each in it's own section.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    padding: 15,
  },
  paragraph: {
    textAlign: 'justify',
  },
};
