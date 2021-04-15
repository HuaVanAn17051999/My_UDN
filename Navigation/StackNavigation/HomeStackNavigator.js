import React, { Component } from 'react';
import { Text, StyleSheet, Image, SafeAreaView, ScrollView, TextInput, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { Badge } from 'react-native-elements'
import Slideshow from 'react-native-image-slider-show';

const HomeStackNavigator = ({ navigator }) => {
  const navigation = navigator

  console.log("Navigation", navigation);

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
        centerComponent={{ text: "Trang Chu", style: { color: "#fff" } }}
      
      />
      <View style={{marginTop: 10}}>
        <Slideshow
          dataSource={[
            { url: 'https://lh3.googleusercontent.com/proxy/YsQaNdXAOHo459LvlngBOXF7ON7EQDNAVUJQidwoqnhqP3rBGzS1QP6Nf6T4R6WVKn4Wr4jX8hYi4jCtCxZuAyAy-RwhoYXqMu8hCWOtprCzxc_ERwJWuBOA_WuWG-DWq_XP_EiaJVU0wv1n' },
            { url: 'data:image/jpeg;base64,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' },
            { url: 'https://lh3.googleusercontent.com/proxy/bAHQZncMpbprauRRisXiY6QODQW4-RJWsCKVPEkc4BVPqAnaYfuYWimhoFnXf1tf8ajN10kUaz-pO6nqYCbnvXBFl-k0cX2hbyvJVuMr4s-dVdcdLVerQpyeQerXY2GfLjjwbgcpzw' }
          ]} />
      </View>
   
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              height: 75,
              borderBottomColor: "yellow",
              borderBottomWidth: 2
            }}>
            <Badge badgeStyle={{ height: 50, padding: 20, margin: 20, }}
              value={<Text style={{ fontSize: 20 }}>Tin tức - Sự kiện</Text>} status="warning"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20
            }}
          >
            <Text style={{ flex: 3, paddingRight: 50 }}>Sinh viên Trường Đại Học Ngoại Ngữ - ĐHDN đạt giải nhất cuộc thi hùng biện tiếng Nhật 2021</Text>
            <Image style={{ flex: 1 }} source={{ uri: 'https://lh3.googleusercontent.com/proxy/m9jmqEWGfZC9nS4d0XyZj3zvECMDu9U7iY4R4Ef8wabqW0iTYj6dqJikI-XMF_w0InYYRBPpaLjKg6FJ8SCq0P4lbAut3O4zd60c-m2po3srqHDtBZo' }}
              style={{ width: 100, height: 100 }} />
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20
            }}
          >
            <Text style={{ flex: 3, paddingRight: 50 }}>Sinh viên Trường Đại Học Ngoại Ngữ - ĐHDN đạt giải nhất cuộc thi hùng biện tiếng Nhật 2021</Text>
            <Image style={{ flex: 1 }} source={{ uri: 'https://lh3.googleusercontent.com/proxy/m9jmqEWGfZC9nS4d0XyZj3zvECMDu9U7iY4R4Ef8wabqW0iTYj6dqJikI-XMF_w0InYYRBPpaLjKg6FJ8SCq0P4lbAut3O4zd60c-m2po3srqHDtBZo' }}
              style={{ width: 100, height: 100 }} />
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 100,
              padding: 20
            }}
          >
            <Text style={{ flex: 3, paddingRight: 50 }}>Sinh viên Trường Đại Học Ngoại Ngữ - ĐHDN đạt giải nhất cuộc thi hùng biện tiếng Nhật 2021</Text>
            <Image style={{ flex: 1 }} source={{ uri: 'https://lh3.googleusercontent.com/proxy/m9jmqEWGfZC9nS4d0XyZj3zvECMDu9U7iY4R4Ef8wabqW0iTYj6dqJikI-XMF_w0InYYRBPpaLjKg6FJ8SCq0P4lbAut3O4zd60c-m2po3srqHDtBZo' }}
              style={{ width: 100, height: 100 }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 75,
              borderBottomColor: 'red', borderBottomWidth: 2
            }}>
            <Badge badgeStyle={{ height: 50, padding: 20, margin: 20, }}
              value={<Text style={{ fontSize: 20 }}>Thông báo</Text>} status="error"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              padding: 20
            }}
          >
            <Badge style={{ flex: 1 }} value="23/5" status="error" />
            <Text style={{ flex: 2, marginLeft: 30 }}>DHDN thông báo mời tham dự Chương trình tư vấn tuyển sinh vào Đại Học Đà Nẵng 2021</Text>
          </View>
        </ScrollView>

     


    </View>


  );




};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    color: "red",
  },
  baseText: {
    fontFamily: "Cochin",
    fontSize: 500
  },
});

export default HomeStackNavigator;
