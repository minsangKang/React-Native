import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { useFonts } from "expo-font";
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Header.js'
import Profile from './src/Profile.js'
import { myProfile, friendProfiles } from './src/data.js';
import Margin from './src/Margin.js';
import Division from './src/Division.js';
import FriendSection from './src/FriendSection.js';
import FriendList from './src/FriendList.js';
import { useState } from 'react';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const onPressArrow = () => {
    setIsOpened(!isOpened)
  }

  const [fontsLoaded] = useFonts({
    "SpoqaHanSansNeo-Bold": require("./assets/fonts/SpoqaHanSansNeo-Bold.ttf"),
    "SpoqaHanSansNeo-Regular": require("./assets/fonts/SpoqaHanSansNeo-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />

      <FriendList
        data={friendProfiles}
        isOpened={isOpened}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    paddingHorizontal: 15
  },
});