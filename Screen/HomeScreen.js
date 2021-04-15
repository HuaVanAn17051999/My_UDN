import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';

class HomeScreen extends React.Component {
  render() {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    return (
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={_handleMore} />
        {/* <Appbar.BackAction icon="menu" onPress={_goBack} /> */}
        <Appbar.Content title="Title" />
        <Appbar.Action icon="magnify" onPress={_handleSearch} />
        {/* <Appbar.Action icon="menu" onPress={_handleMore} /> */}
       </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;