import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello world!
      </Text>

      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={{
        uri: "https://t1.daumcdn.net/cfile/tistory/99B0B04C5B1E03660A"
      }} style={styles.url_image} />

      <TextInput placeholder='이름을 입력해 주세요'></TextInput>

      <ScrollView>
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      <Image source={require("helloworld/dog.jpeg")} style={styles.local_image} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { 
    fontSize: 20,
    fontWeight: "bold"
  },
  local_image: {
    width: 100,
    height: 100,
  },
  url_image: {
    width: 200,
    height: 200,
  }
});
