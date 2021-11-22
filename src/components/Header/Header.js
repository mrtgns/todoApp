import React from 'react';
import {Text, View} from 'react-native';
import styles from './HeaderStyle';
const Header = ({count}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Yapılacaklar</Text>
      <Text style={styles.header_text}>{count}</Text>
    </View>
  );
};

export default Header;
