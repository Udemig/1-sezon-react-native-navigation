import React from 'react';

import {SafeAreaView, View, Text, Button} from 'react-native';

import Header from '../components/header';

const ProductDetail = ({navigation, route}) => {
    console.log(route.params.id);
  return (
    <SafeAreaView>
      <Header title={'Ürün Detay'} />
      <View>
        <Text>Product Detail Screen</Text>
      </View>
      <Button
        title="Şifre Değiştir"
        onPress={() =>
          navigation.navigate('ProfileStack', {screen: 'ChangePassword'})
        }
      />
    </SafeAreaView>
  );
};

export default ProductDetail;
