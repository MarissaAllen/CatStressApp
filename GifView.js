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
  Component
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
  },
  buttonText: {
  fontSize: 18,
  color: 'white',
  alignSelf: 'center'
  },
  button: {
  height: 36,
  flex: 1,
  flexDirection: 'row',
  backgroundColor: '#48BBEC',
  borderColor: '#48BBEC',
  borderWidth: 1,
  borderRadius: 8,
  marginBottom: 10,
  alignSelf: 'stretch',
  justifyContent: 'center'
  },
  image: {
  width: 400,
  height: 300
  }
});

const urlForQuery = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=dc6zaTOxFJmzC';

class GifView extends Component {
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
        // console.log(res.body.data[0]);
      this.setState({gifs: res.body.data})
    });
  }

  render() {
    // if (!this.state.gifs) {
    //   console.log(this.state.gifs[0]);
      return this.renderLoadingView();
    //}

    // var gif = this.state.gifs[0];
    // return this.renderGifs(gif);
  }

  renderLoadingView() {
   return (
     <View style={styles.container}>
       <TouchableHighlight style={styles.button}
         underlayColor='#99d9f4'>
         <Text style={styles.buttonText} onPress={this.onDonePressed.bind(this)}>Done</Text>
       </TouchableHighlight>
       <Image style={styles.image}
         source={require('./cavey.jpg')} />
       <Text>
         Loading gifs...
       </Text>
     </View>
   );
 }

 renderGifs(gifs) {
   return (
     <View style={styles.container}>
       <TouchableHighlight style={styles.button}
         underlayColor='#99d9f4'>
         <Text style={styles.buttonText} onPress={this.onDonePressed.bind(this)}>Done</Text>
       </TouchableHighlight>
         <Image style={styles.image}
           source={require('./cavey.jpg')} />
       <Text style={styles.description}>
         Soon there will be Gif Cats here
       </Text>
       <TouchableHighlight style={styles.button}
         underlayColor='#99d9f4'>
         <Text style={styles.buttonText} onPress={this.onNextPressed.bind(this)}>Next</Text>
       </TouchableHighlight>
     </View>
   );
 }
  //  return (
  //    <View style={styles.container}>
  //      <Image
  //        source={{uri: movie.posters.thumbnail}}
  //        style={styles.thumbnail}
  //      />
  //      <View style={styles.rightContainer}>
  //        <Text style={styles.title}>{movie.title}</Text>
  //        <Text style={styles.year}>{movie.year}</Text>
  //      </View>
  //    </View>
  //  );

  onDonePressed() {}

  onNextPressed() {}
//increment through the gif list and show the next gif

}


module.exports = GifView;
