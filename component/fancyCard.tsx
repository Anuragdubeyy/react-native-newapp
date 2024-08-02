import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headerText}>Fancy Card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/wwuxiyovg5smv4nbmnyp.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink city, jaipur</Text>
          <Text style={styles.cardDescription}>
            The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India.
            Built from red and pink sandstone, it is on the edge of the City
            Palace, Jaipur
          </Text>
          <Text style={styles.cardFooter}>12 min away</Text>
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
    color:'#000000'

  },
  card: {
    width: 378,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },

  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 6,
  },
  cardBody: {
    flex: 1,
    paddingHorizontal: 14,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardLabel: {color: '#000000', fontSize: 14, marginBottom: 6},
  cardFooter: {color: '#000000', fontSize: 12},
});
