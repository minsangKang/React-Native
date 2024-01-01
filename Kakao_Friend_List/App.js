import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/Header.js'
import MyProfile from './src/MyProfile.js'
import { myProfile } from './src/data.js';
import Margin from './src/Margin.js';

const statusBarHeight = getStatusBarHeight(true);

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Margin height={10} />

      <MyProfile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
      />
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
