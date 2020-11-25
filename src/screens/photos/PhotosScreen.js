import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function PhotosScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text>Hello PHOTOS Screen</Text>
        <Text>Show Latest Photos in this Section</Text>
        <Text>Show All Photo Albums in this Section</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
