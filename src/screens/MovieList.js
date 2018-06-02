/**
 * MovieApp
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,

} from 'react-native';

import { ORANGE, PINK, WHITE, GRAYBG } from '../../styles';

import UpcomingListItem from '../components/upcomingListItem';

export default class Movielist extends Component {
  state = {
    upcoming: [
      {id:0, title: 'Test 0 '},
      {id:1, title: 'Test 1 '},
      {id:2, title: 'Test 2 '},
      {id:3, title: 'Test 3 '},
      {id:4, title: 'Test 4 '},
    ]
  }

  keyExtractor = (item) => `${item.id}`;

  renderUpcoming = ({item}) => (
    <UpcomingListItem data={item} />
  )

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>MOVIES</Text>
          <FlatList 
            data={this.state.upcoming}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderUpcoming}
            horizontal
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GRAYBG,
    paddingLeft: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 80,
  }
});
