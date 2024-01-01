import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import Header from './src/Header.js'

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();
// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`)

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
  },
});
