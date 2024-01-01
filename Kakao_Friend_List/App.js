import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { useFonts } from "expo-font";
import Header from './src/Header.js'
import Profile from './src/Profile.js'
import { myProfile, friendProfiles } from './src/data.js';
import Margin from './src/Margin.js';
import Division from './src/Division.js';
import FriendSection from './src/FriendSection.js';
import { useState } from 'react';
import TabBar from './src/TabBar.js';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
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

  const ItemSeparatorComponent = () => <Margin height={13} />
  const renderItem = ({ item }) => (
    <Profile
      uri={item.uri}
      name={item.name}
      introduction={item.introduction}
      isMyProfile={false}
    />
  )
  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMyProfile={true}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
    </View>
  )
  const ListFooterComponent = () => (
    <Margin height={10} />
  )

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Header />

        <FlatList
          data={isOpened ? friendProfiles : []}
          // contentContainerStyle={{ paddingHorizontal: 15 }}
          // stickyHeaderIndices={[0]}
          keyExtractor={(_, index) => index}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />

      </View>

      <TabBar
        selectedTabIdx={selectedTabIdx}
        setSelectedTabIdx={setSelectedTabIdx}
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
  },
});