import request from 'superagent';

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

const urlForQuery = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC';


class GiphyCatsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: null
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    var query = urlForQuery;
    request.get(query, (err, res) => {
        // console.log(query);
        console.log(res.body.data[0]);
      this.setState({gifs: res.body.data})
    });
  }

  render() {

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GiphyCats',
          component: GifView,
          passProps: {gifs: this.props.gifs}
        }}/>
    );
  }

}
AppRegistry.registerComponent('GiphyCats', function() { return GiphyCatsApp });
