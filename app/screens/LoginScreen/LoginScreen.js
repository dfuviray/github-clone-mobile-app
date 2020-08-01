import React, {useContext, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as yup from 'yup';

import AppButton from '../../components/AppButton/AppButton';
import AppErrorText from '../../components/AppErrorText/AppErrorText';
import AppText from '../../components/AppText/AppText';
import {Container} from './LoginScreenStyles';
import {colors} from '../../config/colors';
import LoginContext from '../../context/LoginContext';

let schema = yup.object().shape({
  username: yup.string().required().label('Username'),
  password: yup.string().required().label('Password'),
});

export default function LoginScreen({navigation}) {
  useEffect(() => {});
  const {auth} = useContext(LoginContext);

  if (auth.login) {
    navigation.navigate('Repo');
    return null;
  }

  const handleLogin = (username, password) => {
    auth.onHandleLogin(username, password);
  };

  return (
    <Container>
      <Formik
        initialValues={{username: '', password: ''}}
        validationSchema={schema}
        onSubmit={({username, password}) => handleLogin(username, password)}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldTouched,
          isSubmitting,
        }) => (
          <>
            <Icon
              name="github-alt"
              size={140}
              color={colors.gray}
              style={{marginBottom: 30}}
            />
            <AppText
              placeholder="Username"
              name="username"
              onChangeText={handleChange('username')}
              onBlur={() => setFieldTouched('username')}
            />
            <AppErrorText error={errors.username} />
            <AppText
              placeholder="Password"
              inputType="password"
              name="password"
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
            />
            <AppErrorText error={errors.password} />
            {auth.error && (
              <AppErrorText error="Email or Password is incorrect" />
            )}
            <AppButton label="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Container>
  );
}
