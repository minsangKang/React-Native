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
- React: 컴포넌트 생명주기 (class)
  - `componentDidMount`: 단 한번만 실행, 컴포넌트 생성 이후 (constructor: 컴포넌트 생성자, render: 컴포넌트 렌더링, 첫 렌더링 이후 불림)
  - `componentDidUpdate`: props, 또는 state가 변경되어 render 작업이 끝났을 때, 업데이트 이전 상태값을 알 수 있다.
  - `componentWillUnmount`: 컴포넌트가 소멸되기 직전, didMount에서 등록한 이벤트를 제거
    ```javascript
    import React from "react";
    import { View, Text, Button } from "react-native";

    class Component extends React.Component {
        constructor(props) {
            console.log("constructor");
            super(props);
            this.state = {
                count: 0,
            };
        }

        componentDidMount() {
            console.log("didMount");
        }

        componentDidUpdate(prevProps, prevState) {
            console.log("didUpdate", prevState);
        }

        componentWillUnmount() {
            console.log("componentWillUnmount");
        }

        render() {
            console.log("render");
            return (
                <View style={{ alignItems: "center" }}>
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
    // constructor -> render -> didMount
    // render -> didUpdate {"count": 0}
    // componentWillUnmount
    ```
- React: 컴포넌트 생명주기 (func - useEffect)
  - 함수형 컴포넌트와 달리 constructor, render 및 didMount, willUnmount 부분이 없다.
  - useEffect를 통해 useState의 변화된 값을 수신받아 didUpdate 역할을 할 수 있다.
  - useEffect로 빈 값 설정을 통해 didMount 역할을 할 수 있다.
    ```javascript
    import React, { useEffect, useState } from "react";
    import { View, Text, Button, TextInput, Switch, ActivityIndicator } from "react-native";

    const Component = () => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            console.log("didMount");
        }, []);

        useEffect(() => {
            console.log("didUpdate - count", count);
        }, [count]);

        return (
            <View style={{ alignItems: "center" }}>
                <Text>You clicked {count} times</Text>
                <Button
                    title="Click me" 
                    onPress={() => setCount(count + 1)}
                />
            </View>
        );
    };

    export default Component;
    // didMount -> didUpdate - count 0
    // didUpdate - count 1
    ```
- Custom Hook 만들기
  - 반복적으로 사용되는 useState 생성 부분을 컴포넌트화
  - 컴포넌트 이름이 'use'로 시작해야 한다.
    ```javascript
    const useInput = (initialValue) => {
        const [value, setValue] = useState(initialValue);
        const resetValue = () => setValue(initialValue);

        return {
            value,
            setValue,
            resetValue
        }
    }
    ```
- statusBarHeight
  - [react-native-iphone-x-helper](https://github.com/ptelad/react-native-iphone-x-helper) 라이브러리를 사용하여 padding 설정 방법 (deprecated)
  - [react-native-sfe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) 라이브러리를 사용하는 방법
  - `React Native`의 SaveAreaView 컴포넌트를 사용하는 방법
- 터치가능한 UI
  - React Native: TouchableOpacity 컴포넌트 사용
- 리스트 표시하는 방법
  - ScrollView + map 함수 조합을 통해 구현
  - scrollView의 contentContainerStyle: paddingBottom 값 설정을 통해 safeArea 위로 표시 설정
  - 최상단 component에 key 값이 필요
    ```javascript
    export default (props) => {
        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottomSpace }}>
                {props.data.map((item, index) => (
                    <View key={index}>
                        <Profile
                            uri={item.uri}
                            name={item.name}
                            introduction={item.introduction}
                        />
                        <Margin height={13} />
                    </View>
                )
                )}
            </ScrollView>
        )
    }
    ```
- TabBar 구현
  - `getBottomSpace`를 사용하여 marginBottom을 설정
  - `TouchableOpacity`를 사용하여 TabButton을 구현
  - `useState`를 사용하여 selectedTabIdx, setSelectedTabIdx를 생성
  - isSelected, onPress, activeIconName, inactiveIconName를 각각 받아 TabButton 표시
  

## Style
- `paddingTop`: 상단 padding 설정
- `paddingBottom`: 하단 padding 설정
- `paddingVertical`: 상하단 padding 설정
- `paddingHorizontal`: container의 컴포넌트간 좌우 padding 설정
- `backgroundColor`: 배경색 설정
- `flexDirection`: container의 방향 설정 (row: 가로, column: 세로)
- `justifyContent`: container의 컴포넌트간 정렬 설정 (space-between: 간격 max, flex-end: 하단부터 정렬)
- `fontSize`: 폰트 사이즈
- `fontWeight`: 폰트 굵기 (bold)
- `flex`: 컴포넌트 크기 할당(1: 동일한 공간을 할당)

    
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
- [React - Using the Effect Hook](https://ko.legacy.reactjs.org/docs/hooks-effect.html)
- [Expo: Icons](https://docs.expo.dev/guides/icons/)
- [@expo/vector-icons](https://icons.expo.fyi/Index)
- [React Native - Layout with Flexbox](https://reactnative.dev/docs/flexbox)
- [How to add custom fonts in React Native](https://blog.logrocket.com/adding-custom-fonts-react-native/)