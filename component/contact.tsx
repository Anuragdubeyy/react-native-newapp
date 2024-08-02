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
      <Text style={styles.headerText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, imageUrl, status}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userStatus}>{status}</Text>
            </View>

          </View>
        ))}
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
    marginTop: 10,
    paddingHorizontal: 16,
    marginBottom:14,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:3,
    backgroundColor: '#8D3DAF',
    padding:6,
    borderRadius:10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight:14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    fontSize: 14,
    color: '#000000'
  },
});

