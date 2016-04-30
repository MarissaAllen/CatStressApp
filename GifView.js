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
      gifs: [],
      itemNum: 0,
      length: 0
};
  }

  componentDidMount() {
    this.fetchData();
  }

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
    var gif = this.state.gifs[this.state.itemNum];
    // var length = this.state.gifs.length;
    console.log(gif);
    if (gif != null){
      //if gif is not null render view with gif
      return(
     <View style={styles.container}>
       <TouchableHighlight style={styles.button}
         underlayColor='#99d9f4'>
         <Text style={styles.buttonText} onPress={this.onDonePressed.bind(this)}>Done</Text>
       </TouchableHighlight>
         <Image style={styles.image} source={{ uri: gif.url }} />
       <TouchableHighlight style={styles.button}
         underlayColor='#99d9f4'>
         <Text style={styles.buttonText} onPress={this.onNextPressed.bind(this)}>Next</Text>
       </TouchableHighlight>
     </View>
   );
}
//else render loading view
   else{
     return(
     <View style={styles.container}>
       <Image style={styles.image} source={require('./cavey.jpg')} />
       <Text style={styles.description}>loading...</Text>
     </View>
);
   }
 }


  onDonePressed() {}

  onNextPressed() {
  var newNum = 0;
  var length = this.state.lenth;
  var index = this.state.itemNum;
//increment through the gif list and show the next gif
if (index < length - 1){
newNum = index+ 1;
}
else{ newNum = 0;}
this.setState({itemNum: newNum});
  }
}


module.exports = GifView;
