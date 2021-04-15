import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeStackNavigator from './StackNavigation//HomeStackNavigator'
import TSNavigator from './StackNavigation/TSNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import DanhBaStackNavigator from "./StackNavigation/DanhBaStackNavigator";
import { Icon } from "react-native-elements";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="Trang Chủ" component={BottomTabNavigator}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Image
                            source={require('../assets/homes.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    ),
                }} />
            <Drawer.Screen name="Giới thiệu" component={TSNavigator}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Image
                            source={require('../assets/gt.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    ),
                }} />
            <Drawer.Screen name="Lịch tuần" component={TSNavigator}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Image
                            source={require('../assets/l.jpg')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    ),
                }} />
            <Drawer.Screen name="Danh bạ " component={DanhBaStackNavigator}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Image
                            source={require('../assets/db.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    ),
                }} />
            <Drawer.Screen name="Cài đặt" component={TSNavigator}
                options={{
                    drawerIcon: ({ tintColor }) => (
                        <Image
                            source={require('../assets/setting.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                    ),
                }} />

        </Drawer.Navigator>


    );
};
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

export default DrawerNavigator;