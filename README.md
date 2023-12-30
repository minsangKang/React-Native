# React-Native
link: [React Native를 활용한 빠르고 완성도 높은 앱 개발 with 21개 프로젝트](https://fastcampus.co.kr/dev_online_renative)

## Step
- [Expo Installation](https://docs.expo.dev/get-started/installation/)
  - Node.js
  - Git
  - Watchman
- [Expo CLI](https://docs.expo.dev/get-started/installation/#expo-cli)
  - yarn create expo
- [Create a project](https://docs.expo.dev/get-started/create-a-project/)
  - npx create-expo-app helloworld
  - cd helloworld
  - npx expo start
- [RN: Basic Components](https://reactnative.dev/docs/components-and-apis#basic-components)
  - View
  - Text
  - Image
  - TextInput
  - ScrollView
  - StyleSheet
- [RN: User Interface](https://reactnative.dev/docs/components-and-apis#user-interface)
  - Button
  - Switch
- [React: Component & Props](https://ko.legacy.reactjs.org/docs/components-and-props.html)
  - 함수형 Component
    ```javascript
    const ComponentName = (props) => { 
      return ( 
        <Text>{props.argumentValue}</Text>
      )
    }
    ```
  - 클래스형 Component
    ```javascript
    class ComponentName extends React.Component {
      render() {
        return (
          <Text>{this.props.argumentValue}</Text>
        )
      }
    }
    ```
- [React: Hooks (UseState)](https://reactnative.dev/docs/intro-react#state)
  - 함수형 hook
    ```javascript
    import React, { useState } from "react";
    import { View, Text, Button, Switch, TextInput } from "react-native";

    const Component = () => {
        const [count, setCount] = useState(0);

        return (
            <View>
                <Text>You clicked {count} times</Text>
                <Button title="Click me" onPress={() => setCount(count + 1)} />
            </View>
        );
    };

    export default Component;
    ```
  - 클래스형 hook
    ```javascript
    import React from "react";
    import { View, Text, Button } from "react-native";

    class Component extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0,
            };
        }

        render() {
            return (
                <View>
                    <Text>You clicked {this.state.count} times</Text>
                    <Button
                        title="Click me"
                        onPress={() => this.setState({ count: this.state.count + 1 })}
                    />
                </View>
            );
        }
    }

    export default Component;
    ```

## Create RN Project (with Expo)
### Create Project
```bash
cd directoryName
npx create-expo-app projectName
```

### Run
```bash
cd projectName
npx expo start
```

## Reference
- [Expo](https://docs.expo.dev/get-started/installation/)
- [React Navitive - Core Components and APIs](https://reactnative.dev/docs/components-and-apis)
- [React - Components & Props](https://ko.legacy.reactjs.org/docs/components-and-props.html)
- [React - State](https://reactnative.dev/docs/intro-react#state)