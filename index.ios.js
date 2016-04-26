'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
  NavigatorIOS,
  AppRegistry
} = React;

var GifView = require('./GifView');

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class GiphyCatsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: null
    };
  }

  render() {

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GiphyCats',
          component: GifView
        }}/>
    );
  }

}
AppRegistry.registerComponent('GiphyCats', function() { return GiphyCatsApp });
