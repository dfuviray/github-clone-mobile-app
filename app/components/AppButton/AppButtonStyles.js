import styled from 'styled-components/native';

import {colors} from '../../config/colors';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 25px;
  height: 50px;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 18px;
  text-transform: capitalize;
`;
