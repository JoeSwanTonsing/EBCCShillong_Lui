import React from 'react';
import {View, Text, Image} from 'react-native';

const Card = ({videoId, title, description}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image
          style={styles.image}
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`,
          }}
        />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.title} numberOfLines={2} ellipseMode="tail">
          {title}
        </Text>
        <Text style={styles.date} numberOfLines={3} ellipseMode="tail">
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    borderRadius: 3,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  imageSection: {
    marginBottom: 10,
  },
  image: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    resizeMode: 'cover',
    width: '100%',
    height: 220,
  },
  infoSection: {
    marginBottom: 10,
    paddingHorizontal: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 7,
  },
};

export default Card;
