import React, {
  View,
  Component,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

import CommonStyles from './Styles'

export default class MatchButton extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
           style={styles.button}
           onPress={this.props.onPress}
           underlayColor='#EF5350'>
          <Text style={[CommonStyles.text, styles.go]}>Match me!</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  go: {
    fontSize: 18,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#E53935',
    borderRadius: 50,
    padding: 15,
    width: 150
  }
})
