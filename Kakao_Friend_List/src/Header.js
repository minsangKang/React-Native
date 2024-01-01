import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = (props) => {
    return (
        <TouchableOpacity style={{ paddingHorizontal: 6 }}>
            <Ionicons name={props.name} size={24} color="black" />
        </TouchableOpacity>
    )
}

const Header = () => {
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 10 }}>
            <Text style={{ fontFamily: "SpoqaHanSansNeo-Bold", fontSize: 22 }}>친구</Text>

            <View style={{ flexDirection: "row" }}>
                <IconButton name="search-outline" />
                <IconButton name="person-add-outline" />
                <IconButton name="md-musical-notes-outline" />
                <IconButton name="ios-settings-outline" />
            </View>
        </View>
    )
}

export default Header