import React from 'react';
import {SafeAreaView, View, ScrollView, Text} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          Display Latest Uploads from YouTube, Posts from Facebook and Photos
          from Instagram separately, each in it's own section.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
