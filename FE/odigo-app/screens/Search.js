import React from 'react';
import { View, Text, Button } from 'react-native';

function Search({ navigation }) {
    return (
    <View>
        <Text>This is Screen 2</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
    );
}

export default Search;