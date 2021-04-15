import React, { useState } from 'react';
import { Text, StyleSheet,TextInput, View } from 'react-native';

const NckhStackNavigator = () => {
    return (
      <View>
         <Text style={styles.container}>This page NCKH !</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      color: 'red'
    },
  });
  
  
 export default NckhStackNavigator;