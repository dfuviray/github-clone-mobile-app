import React, {useContext} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RepoScreen from '../screens/RepoScreen/RepoScreen';
import CommitScreen from '../screens/CommitScreen/CommitScreen';
import LoginContext from '../context/LoginContext';
const LoginStack = createStackNavigator();

function App() {
  const {auth} = useContext(LoginContext);
  return (
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerShown: false,
          headerRight: () => (
            <Text onPress={() => auth.onHandleLogout(false)}>Logout</Text>
          ),
        }}>
        <LoginStack.Screen name="Login" component={LoginScreen} />
        <LoginStack.Screen
          name="Repo"
          component={RepoScreen}
          options={{headerShown: true}}
        />
        <LoginStack.Screen
          name="Commit"
          component={CommitScreen}
          options={{headerShown: true}}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
