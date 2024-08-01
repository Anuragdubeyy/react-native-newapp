import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function flatCards() {
  return (
    <View>
      <Text style={styles.headerText}>flatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text> red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text> blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text> green</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text> blue</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: '#00ff00',
  },
});
