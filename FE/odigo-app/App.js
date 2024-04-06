import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main.js';
import Search from './screens/Search.js';
import TrainSelect from './screens/TrainSelect.js';

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            title: '목적역',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="TrainSelect"
          component={TrainSelect}
          options={({ navigation }) => ({
            title: '목적역',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerShadowVisible: false,
            headerBackTitleVisible: false,
            headerLeft: null,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
