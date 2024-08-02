import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headerText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text> red</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text> hello</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text> hey</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text> cool</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text> sad</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    color:'#000000'

  },
  container: {
    padding: 8,
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
  elevatedCard: {
    backgroundColor: '#f0f0f0',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'blue',
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
