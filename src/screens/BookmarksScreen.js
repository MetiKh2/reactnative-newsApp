/* eslint-disable prettier/prettier */
import {FlatList, Linking, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const BookmarksScreen = () => {
  const [bookmarks, setBookmarks] = useState([]);
  
  useFocusEffect(
    useCallback(() => {
       const getBookmarks = async () => {
        const stringBookmarks =
          (await AsyncStorage.getItem('bookmarks_news')) || '[]';
        const jsonBookmarks = JSON.parse(stringBookmarks);
        setBookmarks(jsonBookmarks);
      };
      getBookmarks();
      return()=>getBookmarks();
    }, [])
  )
  return (
    <View style={{flex:1}}>
      <FlatList
        data={bookmarks}
        renderItem={({item}) => (
          <View style={{marginVertical: 20, marginHorizontal: 10}}>
            <Text
              style={{color: '#00008b'}}
              onPress={() => Linking.openURL(item)}>
              {item}
            </Text>
            
          </View>
        )}
      />
    </View>
  );
};

export default BookmarksScreen;
