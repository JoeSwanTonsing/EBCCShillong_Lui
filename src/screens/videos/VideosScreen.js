import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=song&type=video&key=AIzaSyDqrTNLt0BchieTOXKozxk_80mHM210upE

//My Components
import Spinner from '../../components/Spinner';
import Card from '../../components/cards/Card';

export default function VideosScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [miniCardData, setMiniCard] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://joeswantonsing.github.io/ebccshg_data/api/youtube_videos.json',
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setMiniCard(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function renderVideos() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {miniCardData.map((video) => (
            <TouchableOpacity
              key={video.id.videoId}
              onPress={() =>
                alert('Open Video in Player with ID: ' + video.id.videoId)
              }>
              <Card
                videoId={video.id.videoId}
                title={video.snippet.title}
                description={video.snippet.description}
              />
            </TouchableOpacity>
          ))}

          {/*<Card />
          <Card />
          <Card />
          <Card />*/}
        </View>
      </ScrollView>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <Spinner
            color="#264653"
            spinnerText="Ngak Zek Lai Hamham Ni Mo . . ."
          />
        </View>
      ) : (
        renderVideos()
      )}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    marginTop: 15,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
