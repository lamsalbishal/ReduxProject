import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addStory} from './src/actions/levelActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addNewStory = () => {
    const data = [
      {
        story: 'Today story',
        name: 'Bishal Lamsal',
      },
    ];
    this.props.addStory(data);
  };
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.story.collection.length > 0 &&
          this.props.story.collection.map(item => {
            return (
              <View>
                <Text>H</Text>
              </View>
            );
          })}
        <Text style={{fontSize: 30, padding: 15}}>hello</Text>

        <Button title={'Click Me'} onPress={() => this.addNewStory()}></Button>
      </View>
    );
  }
}

mapStateToProps = ({story}) => {
  return {story};
};

mapDispatchToProps = dispatch => {
  return bindActionCreators({addStory}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
