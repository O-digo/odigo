import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main.js';
import Search from './screens/Search.js';
import Setting from './screens/Setting.js';
import AlertSetting from './screens/AlertSetting.js';
import FavoriteEdit from './screens/FavoriteEdit.js';
import FavoriteAdd from './screens/FavoriteAdd.js';

const Stack = createStackNavigator();

const navTheme = {
  ...DefaultTheme,
  colors: {
    // ...DefaultTheme.colors,
    background: 'black', // 헤더 배경색
    text: 'white', // 헤더 텍스트 생상
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navTheme} >
      <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen 
          name="Main"
          component={Main}
          options={{ 
            title: '홈',
            headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ title: '다음역' }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{ title: '설정' }}
        />
        <Stack.Screen
          name="AlertSetting"
          component={AlertSetting}
          options={{ title: '알림' }}
        />
        <Stack.Screen
          name="FavoriteEdit"
          component={FavoriteEdit}
          options={{ title: '자주 가는 역 관리' }}
        />
        <Stack.Screen
          name="FavoriteAdd"
          component={FavoriteAdd}
          options={{ title: '자주 가는 역 추가하기' }}
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
