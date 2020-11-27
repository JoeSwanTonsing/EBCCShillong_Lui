import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function LaigelhScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Text>Hello Laigelh Screen</Text>
        <Text>Show Latest Articles in this Chronological order</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
