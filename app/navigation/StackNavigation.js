import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RepoScreen from '../screens/RepoScreen/RepoScreen';
import CommitScreen from '../screens/CommitScreen/CommitScreen';

const LoginStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="Repo" component={RepoScreen} />
        <LoginStack.Screen
          name="Commit"
          component={CommitScreen}
          options={{headerShown: true}}
        />
        <LoginStack.Screen name="Login" component={LoginScreen} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
