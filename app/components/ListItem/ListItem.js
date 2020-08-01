import React from 'react';

import {
  Avatar,
  AuthorContainer,
  Container,
  Message,
  Name,
} from './ListItemStyles';

export default function ListItem({avatar, name, message}) {
  return (
    <Container>
      <Message numberOfLines={1}>{message}</Message>
      <AuthorContainer>
        <Avatar source={{uri: avatar}} />
        <Name>{name}</Name>
      </AuthorContainer>
    </Container>
  );
}
