import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Container, InputTextField} from './AppTextStyles';

export default function AppText({inputType = 'textinput', ...resProps}) {
  const [displayPassword, setDisplayPassword] = useState(true);
  if (inputType == 'password')
    return (
      <Container>
        <InputTextField
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={displayPassword}
          {...resProps}
        />
        <Icon
          name="eye"
          size={20}
          color="#000"
          onPress={() => setDisplayPassword(!displayPassword)}
        />
      </Container>
    );

  return (
    <Container>
      <InputTextField autoCapitalize="none" autoCorrect={false} {...resProps} />
    </Container>
  );
}
