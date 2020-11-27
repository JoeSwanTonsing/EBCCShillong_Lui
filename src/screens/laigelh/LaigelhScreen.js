import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//My components
import LaigelhCard from '../../components/cards/LaigelhCard';

export default function LaigelhScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <LaigelhCard />
      </ScrollView>
    </SafeAreaView>
  );
}
