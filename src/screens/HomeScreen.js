import React from 'react';

import {View, SafeAreaView, Text, Button} from 'react-native';
import Header from '../components/header';

const HomeScreen = props => {
  const {navigation, route} = props;
  return (
    <SafeAreaView>
      <Header title={'Anasayfa'} />
      <View>
        <Text>Home Screen</Text>
      </View>
      <Button
        title="Ürün Detay"
        onPress={() =>
          navigation.navigate('ProductsStack', {
            screen: 'ProductDetail',
            params: {id: '1'},
          })
        }
      />
      <Button
        title="Şifre Değiştir"
        onPress={() =>
          navigation.navigate('ProfileStack', {screen: 'ChangePassword'})
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
