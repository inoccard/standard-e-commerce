// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { Container, ContentHome, TitleHome, Description } from './styles';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Container>
        <ContentHome>
          <TitleHome>República do Biolo</TitleHome>
          
          <Button
            title="Ir para Segunda Página"
            onPress={() => navigation.navigate('SecondPage')}
          />
          <Button
            title="Ir para Terceira Página"
            onPress={() => navigation.navigate('ThirdPage')}
          />
        </ContentHome>
      </Container>
    </SafeAreaView>
  );
}

export default Home;