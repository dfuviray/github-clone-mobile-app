import React from 'react';

import AppButton from '../../components/AppButton/AppButton';
import AppText from '../../components/AppText/AppText';
import {Container} from './RepoScreenStyles';

export default function RepoScreen() {
  return (
    <Container>
      <AppText defaultValue="facebook/react-native" />
      <AppButton label="submit" />
    </Container>
  );
}
