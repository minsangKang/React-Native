import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

// 반복 사용되는 View Component
const InputBox = (props) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <TextInput
                value={props.value}
                onChangeText={props.onChangeText}
                style={{ borderBottomWidth: 1, width: 200 }}
                placeholder={props.placeholder}
            />
            <Button
                title="초기화"
                onPress={props.onReset}
            />
        </View>
    )
}

// 반복 사용되는 useState 생성 구조
const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const resetValue = () => setValue(initialValue);

    return {
        value,
        setValue,
        resetValue
    }
}

// useState 생성 구조를 컴포넌트화한 useInput을 사용한 Component
const CustomHook = () => {
    // 구조분해 할당을 통해 InputBox의 props 설정을 위한 값들을 생성
    const {
        value: name,
        setValue: setName,
        resetValue: resetName
    } = useInput("")
    const {
        value: age,
        setValue: setAge,
        resetValue: resetAge
    } = useInput("")
    const {
        value: city,
        setValue: setCity,
        resetValue: resetCity
    } = useInput("")

    return (
        <View>
            <InputBox
                value={name}
                onChangeText={setName}
                placeholder="이름을 입력해 주세요"
                onReset={resetName}
            />

            <InputBox
                value={age}
                onChangeText={setAge}
                placeholder="나이를 입력해 주세요"
                onReset={resetAge}
            />

            <InputBox
                value={city}
                onChangeText={setCity}
                placeholder="사는 곳을 입력해 주세요"
                onReset={resetCity}
            />
        </View>
    )
}

export default CustomHook;