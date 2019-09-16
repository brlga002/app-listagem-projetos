import React, {Component} from 'react';
import api from '../services/api';

import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

export default class Main extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Bem vindo',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        flexGrow: 1,
      },
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.productButton}
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}>
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DA552F',
  },
});
