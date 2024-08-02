import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Contact() {
  const contacts = [
    {
      uid: 1,
      name: 'Anurag Dubey',
      status: 'full stack developer',
      imageUrl:
        'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1634719894/1634719892.jpg',
    },
    {
      uid: 2,
      name: 'Punit shukal',
      status: 'Animation and AIML developer',
      imageUrl:
        'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1634719894/1634719892.jpg',
    },
    {
      uid: 3,
      name: 'Abhishek Dubey',
      status: 'management of people matters',
      imageUrl:
        'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1634719894/1634719892.jpg',
    },
    {
      uid: 4,
      name: 'Dnynal Deshamukh',
      status: 'AIML export and developer',
      imageUrl:
        'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1634719894/1634719892.jpg',
    },
    {
      uid: 5,
      name: 'shivam chaurashiya',
      status: 'machine learning developer',
      imageUrl:
        'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1634719894/1634719892.jpg',
    },
    {
      uid: 6,
      name: 'Taronis faruhat',
      status: 'business analyst and development',
      imageUrl:
        'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1634719894/1634719892.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headerText}>contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, imageUrl, status}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
  },
  container: {},
  userCard: {},
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  userName: {},
  userStatus: {},
});
