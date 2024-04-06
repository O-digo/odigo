import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen2({ navigation }) {
    return (
    <View>
        <Text>This is Screen 2</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
}

export default Screen2;