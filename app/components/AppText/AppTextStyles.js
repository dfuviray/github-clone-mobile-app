import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  background: ${colors.secondary};
  border-radius: 25px;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;

export const InputTextField = styled.TextInput`
  margin-right: auto;
  font-size: 18px;
`;
