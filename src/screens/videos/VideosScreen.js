import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function VideosScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text>Hello Videos Screen</Text>
        <Text>Show Latest Videos in this Section</Text>
        <Text>Show Playlists in this Section</Text>
        <Text>Show All Videos in this Section</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
