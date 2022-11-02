import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const height = Dimensions.get('window').height;

  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  })
  const { marginLeft, marginTop } = location;
  function onPress(evt) {
    // var x =1+Math.random()*(100-1);
    // console.log(x);
    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    })
  }
  function onMove(evt) {
    setLocation({ marginLeft: evt.nativeEvent.locationX, marginTop: evt.nativeEvent.locationY });
    //console.log(location);
  }
  return (
    <View style={[styles.container]}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}>
      <Animated.Image
        source={require('./assets/cat.png')}
        style={{ marginLeft: marginLeft, marginTop: marginTop }}>

      </Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
