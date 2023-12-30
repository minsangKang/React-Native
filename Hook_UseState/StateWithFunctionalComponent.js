import React, { useState } from "react";
import { View, Text, Button, Switch, TextInput } from "react-native";

const Component = () => {
    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [name, setName] = useState("");

    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Button title="Click me" onPress={() => setCount(count + 1)} />

            <Text>------------</Text>

            <Switch
                value={isOn}
                onValueChange={v => {
                    setIsOn(v);
                }}
            />

            <Text>------------</Text>

            <TextInput
                value={name}
                onChangeText={v => {
                    setName(v);
                }}
            />
        </View>
    );
};

export default Component;