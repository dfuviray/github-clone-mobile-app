import styled from 'styled-components/native';

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const Container = styled.View`
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: ${width / 5}px;
`;
