// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const SecondPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            This is Second Page
          </Text>
          <Button
            title="IR para Início"
            onPress={() => navigation.navigate('Home')}
          />
          <Button
            title="IR para terceira Página"
            onPress={() => navigation.navigate('ThirdPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default SecondPage;