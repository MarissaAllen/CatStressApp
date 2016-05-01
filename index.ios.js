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
      gifs: [],
      length: 0
    };
  }

  // componentWillMount() {
  //   this.fetchData();
  // }
  //
  // fetchData() {
  //   var query = urlForQuery;
  //   request.get(query, (err, res) => {
  //       // map the returned JSON object to new list with urls
  //       var gifList = res.body.data.map(function(gifImg){
  //         // return small gif urls
  //         return {url: gifImg.images.downsized.url};
  //       });
  //       this.setState({gifs: gifList,
  //                     length: gifList.length});
  //   });
  // }
fetchData() {
    var query = urlForQuery;
    request.get(query, (err, res) => {
        // map the returned JSON object to new list with urls
        var gifList = res.body.data.map(function(gifImg){
          // return small gif urls
          return {url: gifImg.images.downsized.url};
        });
        this.setState({gifs: gifList,
                      length: gifList.length});
    });
  }

  render() {
console.log(this.state.gifs[0]);
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GiphyCats',
          component: GifView,
          passProps: {gifs: this.state.gifs}
        }}/>
    );
  }

}
AppRegistry.registerComponent('GiphyCats', function() { return GiphyCatsApp });
