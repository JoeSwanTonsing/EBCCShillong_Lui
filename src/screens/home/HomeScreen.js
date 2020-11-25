import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>👋🏻 Chibai!</Text>
          <Text style={styles.paragraph}>
            Describe what this app is about in paite. Tell users what they can
            do with this app, how it will help them, etc.
          </Text>
          <Text style={styles.paragraph}>
            Describe about this project, add link to the Git Hub Pages, who and
            how they can contribute, etc. Try to Fill up this screen with
            information.
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
  heading: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    paddingBottom: 15,
  },
  paragraph: {
    textAlign: 'justify',
    marginTop: 5,
    marginBottom: 10,
  },
};
