import React, { useState } from 'react';
import { Text, StyleSheet,TextInput, View } from 'react-native';

const DaoTaoStackNavigator = () => {
    return (
      <View>
         <Text style={styles.container}>This page DaoTao !</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      color: 'red'
    },
    icon: {
      width: 24,
      height: 24,
  },
  });
  
  
 export default DaoTaoStackNavigator;