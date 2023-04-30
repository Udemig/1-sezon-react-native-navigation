import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const StackMenu = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.container}>
      {isOpen && (
        <View style={styles.menuWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate('StackHome')}>
            <Text style={styles.menuItemText}>Anasayfa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StackCategories')}>
            <Text style={styles.menuItemText}>Kategoriler</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StackProfile')}>
            <Text style={styles.menuItemText}>Profil</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={()=>setIsOpen(!isOpen)}>
        <Icon name={isOpen ? "arrow-down-circle":"arrow-up-circle"} size={40} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'flex-end',
  },
  menuWrapper: {
    borderWidth:1,
    padding:10,
    gap:10,
    marginBottom:10
  },
  menuItemText:{
    fontSize:18
  }
});

export default StackMenu;
