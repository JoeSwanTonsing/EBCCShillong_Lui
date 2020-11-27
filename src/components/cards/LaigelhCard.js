import React from 'react';
import {View, Text, Image} from 'react-native';

export default function LaigelhCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1} ellipseMode="tail">
        Laigelh Card
      </Text>
      <Text style={styles.details} numberOfLines={3} ellipseMode="tail">
        Shot Description / Details / Gist
      </Text>
      <Text style={styles.author} numberOfLines={1} ellipseMode="tail">
        Pastor V.L. Hminglian
      </Text>
      <Text style={styles.date} numberOfLines={1} ellipseMode="tail">
        Gelh Ni: 22-Nov-2020
      </Text>
    </View>
  );
}

const styles = {
  container: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
    color: '#002855',
  },
  details: {
    marginBottom: 7,
  },
  author: {
    marginBottom: 7,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'grey',
  },
  date: {
    color: 'grey',
  },
};
