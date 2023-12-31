import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UseEffectWithClassComponent from "./UseEffectWithClassComponent";
import UseEffectWithFunctionalComponent from "./UseEffectWithFunctionalComponent";
import CustomHook from './CustomHook';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UseEffectWithClassComponent /> */}
      {/* <UseEffectWithFunctionalComponent /> */}
      <CustomHook />
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
