import React from 'react';

import {Container, Label} from './AppButtonStyles';

export default function AppButton({label, ...resProps}) {
  return (
    <Container {...resProps}>
      <Label>{label}</Label>
    </Container>
  );
}
