import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RepoScreen from '../screens/RepoScreen/RepoScreen';

const LoginStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen name="Repo" component={RepoScreen} />
        <LoginStack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
