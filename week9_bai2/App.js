import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const chuot1 = useRef(new Animated.ValueXY({
    x: 0,
    y: 0
  })).current;
  const chuot2 = useRef(new Animated.ValueXY({
    x: 0,
    y: 0
  })).current;
  const chuot3 = useRef(new Animated.ValueXY({
    x: 0,
    y: 0
  })).current;

  function random(evt) {
    Animated.timing(
      chuot1,
      {
        toValue:
        {
          x: Math.floor(Math.random()*(width-100))+1,
          y: Math.floor(Math.random()*(height-100))+1,
        },
        duration: 1000,
        useNativeDriver: false,
      }).start();
    Animated.timing(
      chuot2,
      {
        toValue:
        {
          x: Math.floor(Math.random()*(width-100))+1,
          y: Math.floor(Math.random()*(height-100))+1,
        },
        duration: 1000,
        useNativeDriver: false,
      }).start();
    Animated.timing(
      chuot3,
      {
        toValue:
        {
          x: Math.floor(Math.random()*(width-100))+1,
          y: Math.floor(Math.random()*(height-100))+1,
        },
        duration: 1000,
        useNativeDriver: false,
      }).start();
  }
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;
  return (
    <View style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={random}>
      <Animated.Image source={require('./assets/mouse.gif')} style={[{ width: 100, height: 100, }, chuot1.getLayout()]}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.gif')} style={[{ width: 100, height: 100, }, chuot2.getLayout()]}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.gif')} style={[{ width: 100, height: 100, }, chuot3.getLayout()]}></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
