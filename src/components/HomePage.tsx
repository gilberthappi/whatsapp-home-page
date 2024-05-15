import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button, Title, Paragraph, FAB } from "react-native-paper"; 
import {
  Tabs,
  TabScreen,
  TabsProvider,
  useTabIndex,
  useTabNavigation,
} from "react-native-paper-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import CardItem from "./CardItem";
const cardItems = [
  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },
  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },
  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },

  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },

  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },
  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },
  { name: "Happi", lastText: "Hello bro ngwino home", time: "5:27 PM" },


];

function Home() {
  return (
    <View>
      <Appbar.Header
        style={{
          backgroundColor: "#008069",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Appbar.BackAction
          onPress={() => {}}
          style={{
            width: 0,
          }}
        />
        <Appbar.Content
          title="WhatsApp"
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            width: "100%",
          }}
          titleStyle={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
          }}
        />
        <Appbar.Action icon="magnify" iconColor="#fff"
         onPress={() => {console.log('searching...')}} />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => {console.log('menu clicked')}}
          iconColor="#fff"
        />
      </Appbar.Header>
      <TabsProvider
        defaultIndex={0}

      >
        <Tabs
          uppercase={false} 
          style={{ backgroundColor: "#008069" }} 
          tabLabelStyle={{
            color: "#fff",
            fontSize: 14,
          
            fontWeight: "700",
            borderBottomColor: "#fff",
          }}
        >
          <TabScreen icon="camera" label="">
            <View style={{ backgroundColor: "green", flex: 1 }} />
          </TabScreen>
          <TabScreen label="CHATS" badge={33}>
            <View style={{ backgroundColor: "blue", flex: 1 }} />
          </TabScreen>
          <TabScreen label="STATUS">
            <View style={{ backgroundColor: "black", flex: 1 }} />
          </TabScreen>
          <TabScreen
            label="CALLS"
          >
            <View style={{ backgroundColor: "red", flex: 1 }} />
          </TabScreen>
        </Tabs>
      </TabsProvider>
      <ScrollView>
        {cardItems.map((item) => (
          <CardItem {...item} />
        ))}
      </ScrollView>
      <FAB
         style={styles.fab}
         small
         icon="message-reply-text"
         onPress={() => {console.log('what you are searching for ')}} 
         />
        
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: "#008069",
  },
});

export default Home;