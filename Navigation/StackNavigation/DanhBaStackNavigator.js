import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';
import { Header, Icon } from "react-native-elements";
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/Feather';

const DanhBaStackNavigator = () => {

    return (
        <View>
            <Header
                leftComponent={
                    <Icon
                        name="menu"
                        color="#fff"
                        onPress={() => navigation.openDrawer()}
                    ></Icon>
                }
                centerComponent={{ text: "DANH BẠ", style: { color: "#fff" } }}
            />
            <View
                style={{
                    flexDirection: "row",
                    height: 75,
                }}>
                <Text>Đơn vị </Text>
                <DropDownPicker
                    items={[
                        { label: 'Đại Học Ngoại Ngữ', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true },
                        { label: 'Đại Học BKDN', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" /> },
                        { label: 'Đại Học CNTT & TT Việt Hàn', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" /> },
                    ]}
                />
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        color: 'red'
    },
});


export default DanhBaStackNavigator;