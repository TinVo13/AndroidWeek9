import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    Top: new Animated.Value(10),
    Left: new Animated.Value(10),
  })
  const { Top, Left } = location;
  function random(evt) {
    var setx = 1 + Math.random() * (height - 1);
    var sety = 1 + Math.random() * (width - 1);
    setLocation({
      x: setx,
      y: sety,
      Top: setx - 30,
      Left: sety - 30,
    })
  }
  var height = Dimensions.get('window').height;
  var width = Dimensions.get('window').width;
  return (
    <View style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={random}>
      <Animated.Image source={require('./assets/mouse.gif')} style={{ width: 100, height: 100, marginLeft: Left * Math.random(), marginTop: Top * Math.random(), position: 'relative' }}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.gif')} style={{ width: 100, height: 100, marginLeft: Left * Math.random(), marginTop: Top * Math.random(), position: 'relative' }}></Animated.Image>
      <Animated.Image source={require('./assets/mouse.gif')} style={{ width: 100, height: 100, marginLeft: Left * Math.random(), marginTop: Top * Math.random(), position: 'relative' }}></Animated.Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
