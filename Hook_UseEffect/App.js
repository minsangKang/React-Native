import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectWithClassComponent from "./UseEffectWithClassComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <UseEffectWithClassComponent />
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
});
