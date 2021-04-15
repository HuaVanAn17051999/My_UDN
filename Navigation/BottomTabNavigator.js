import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./StackNavigation/HomeStackNavigator";
import TSNavigator from "./StackNavigation/TSNavigator";
import DaoTaoStackNavigator from "./StackNavigation/DaoTaoStackNavigator";
import TinTucStackNavigator from "./StackNavigation/TinTucStackNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions ={{showIcon: true }}
      initialRouteName="Home"
      tabBarOptions={{ labelStyle: {}, style: { height: 80 } }}
    >
      <Tab.Screen
        style={styles.container}
        name="Home"
        // component={HomeStackNavigator}
        options={{
          tabBarLabel: "Trang Chu",
          style: {
            fontSize: 50
          },
          tabBarIcon: ({ tintColor }) => (
            <Image
                  source={require('../assets/homes.png')}
                  style={[styles.icon, { tintColor: tintColor }]}
                />
          ),
        }}
      >
        {(props) => <HomeStackNavigator navigator={navigation} />}
      </Tab.Screen>

      <Tab.Screen
        tabBarOptions ={{showIcon: true }}
        style={styles.container}
        name="TinTuc"
        component={TinTucStackNavigator}
        options={{ tabBarLabel: "Tin Tuc", style: { fontWeight: "normal" }, tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('../assets/tintuc.png')}
              style={[styles.icon, { tintColor: tintColor }]}
        />
        ) }}
      />
      <Tab.Screen
        tabBarOptions ={{showIcon: true }}
        style={styles.container}
        name="TuyenSinh"
        component={TinTucStackNavigator}
        options={{ tabBarLabel: "Tuyển Sinh", style: { fontWeight: "normal" }, tabBarIcon: ({ tintColor }) => (
          <Image
              source={require('../assets/ts.png')}
              style={[styles.icon, { tintColor: tintColor }]}
        />
        ) }}
      />

      <Tab.Screen
        style={styles.container}
        name="DaoTao"
        component={DaoTaoStackNavigator}
        options={{
          tabBarLabel: "Dao Tao ",
          style: {
             fontSize: 30,
             with: 30
          },
          tabBarIcon: ({ tintColor }) => (
            <Image
                  source={require('../assets/dt.png')}
                  style={[styles.icon, { tintColor: tintColor }]}
                />
          ),
        }}
      />
     
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    color: "red",
  },
  icon: {
    width: 40,
    height: 40,
  },
});
export default BottomTabNavigator;
