import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, Animated, Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
  const [touch, setTouch] = useState(1);
  //console.log(dem);

  const meo = useRef(new Animated.ValueXY({
    x: 0,
    y: 0,
  })).current;
  const chuot1 = useRef(new Animated.ValueXY({
    x: Math.random() * (width - 100) + 1,
    y: Math.random() * (height - 100) + 1,
  })).current;
  const chuot2 = useRef(new Animated.ValueXY({
    x: Math.random() * (width - 100) + 1,
    y: Math.random() * (height - 100) + 1,
  })).current;
  const chuot3 = useRef(new Animated.ValueXY({
    x: Math.random() * (width - 100) + 1,
    y: Math.random() * (height - 100) + 1,
  })).current;

  function batchuot(evt) {
    setTouch(touch + 1);
    console.log(touch);
    Animated.timing(meo, {
      toValue: {
        x: evt.nativeEvent.locationX - 20,
        y: evt.nativeEvent.locationY - 70,
      },
      duration: 1000,
      useNativeDriver: false
    }).start();
    if (touch === randomNumber) {
      Alert.alert('Hoan thanh', 'Da bat duoc chuot');
    } else {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(chuot1, {
            toValue: {
              x: Math.random() * (width - 100) + 1,
              y: Math.random() * (height - 100) + 1,
            }, duration: 500,
            useNativeDriver: false
          }),
          Animated.timing(chuot2, {
            toValue: {
              x: Math.random() * (width - 100) + 1,
              y: Math.random() * (height - 100) + 1,
            }, duration: 500,
            useNativeDriver: false
          }),
          Animated.timing(chuot3, {
            toValue: {
              x: Math.random() * (width - 100) + 1,
              y: Math.random() * (height - 100) + 1,
            }, duration: 500,
            useNativeDriver: false
          })
        ]),
      ]).start();
    }
  }

  return (
    <View style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={batchuot}>
      <Animated.Image source={require('./assets/cat.png')} style={[meo.getLayout(), { height: 80, width: 80 }]}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.png')} style={[chuot1.getLayout(), { height: 80, width: 80 }]}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.png')} style={[chuot2.getLayout(), { height: 80, width: 80 }]}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.png')} style={[chuot3.getLayout(), { height: 80, width: 80 }]}></Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
