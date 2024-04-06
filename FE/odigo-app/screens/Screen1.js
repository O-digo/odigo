import React from 'react';
import { View, Text, Button } from 'react-native';

function Screen1({ navigation }) {
  return (
    <View>
      <Text>This is Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}

export default Screen1;