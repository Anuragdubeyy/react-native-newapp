import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: String) {
    Linking.openURL(websiteLink as string);
  }
  return (
    <View>
      <Text style={styles.headerText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}></View>
        <Image
          source={{
            uri: 'https://media.houseandgarden.co.uk/photos/61894c9262b737ababca191d/16:9/w_1600,c_limit/2830087-house-7mar16_pr_b.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.cardTitle}>Hotel in Jaipur</Text>
          <Text numberOfLines={3}>
            No design lover should leave Jaipur without having sipped a drink in
            Bar Palladio, the most remarkable of settings. The experience begins
            in the grounds of the Narain Niwas Palace hotel. You enter the bar
            via a garden, where blue and white canopied divans piled with
            block-printed cushions host a relaxed cocktail crowd around flaming
            fire pits.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.houseandgarden.co.uk/article/travel-guide-jaipur',
              )
            }>
            <Text style={styles.socialLink}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/houseandgardenuk/')
            }>
            <Text style={styles.socialLink}>Follow Me</Text>
          </TouchableOpacity>
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
  card: {
    width: 378,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  headingContainer: {},

  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    padding: 6,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 14,
  },
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 14,
  },
  socialLink: {
    color: 'blue',
  },
});
