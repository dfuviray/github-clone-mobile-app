import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import AppButton from '../../components/AppButton/AppButton';
import AppText from '../../components/AppText/AppText';
import {Container} from './LoginScreenStyles';
import {colors} from '../../config/colors';

export default function LoginScreen() {
  return (
    <Container>
      <Icon
        name="github-alt"
        size={140}
        color={colors.gray}
        style={{marginBottom: 30}}
      />
      <AppText placeholder="Username" />
      <AppText placeholder="Password" inputType="password" />
      <AppButton label="Login" />
    </Container>
  );
}
