import React, {useEffect, useState} from 'react';
import axios from 'axios';

import LoginContext from './app/context/LoginContext';
import StackNavigation from './app/navigation/StackNavigation';

const App = ({navigation}) => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {});

  const onLogin = (username, password) => {
    const response = async () => {
      try {
        setLoading(true);
        setLogin(false);
        setError(false);
        const header = btoa(username + ':' + password);
        const result = await axios.get('https://api.github.com/user', {
          headers: {Authorization: 'Basic ' + header},
        });
        setLoading(false);

        if (result.status == 200) return setLogin(true);

        throw new Error('Error!');
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    response();
  };

  const onLogout = () => {
    setLogin(false);
  };

  return (
    <LoginContext.Provider
      value={{
        auth: {
          onHandleLogin: onLogin,
          onHandleLogout: onLogout,
          error: error,
          login: login,
          loading: loading,
        },
      }}>
      <StackNavigation />
    </LoginContext.Provider>
  );
};

export default App;
