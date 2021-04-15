import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import DrawerNavigation from './DrawerNavigator'

const Navigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
};

export default Navigation;