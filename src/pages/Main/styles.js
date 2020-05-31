import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #06a891;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
  align-items: center;
`;

export const TitleMain = styled.Text`
  font-size: 65px;
  color: #FFF
`;

export const Description = styled.Text`
  font-size: 20px;
  color: #FFF;
`;