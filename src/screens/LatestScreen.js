/* eslint-disable prettier/prettier */
import {View, Text, FlatList, Button, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_TOKEN} from './../constants/index';
import NewsCard from '../components/NewsCard';
import {TextInput} from 'react-native-gesture-handler';

export default function LatestScreen() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState('');
  const [reset, setReset] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://gnews.io/api/v4/${
        query ? `search?q=${query}&` : 'top-headlines?'
      }lang=es&token=${API_TOKEN}`,
    )
      .then(res => res.json())
      .then(json => {
        setNews(json.articles);
        setLoading(false);
      });
  }, [reset]);
  return (
    <View style={{backgroundColor: '#eee', flex: 1}}>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: 'row',
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <TextInput
          onChangeText={setQuery}
          placeholder="Search ..."
          placeholderTextColor={'#000'}
          style={{flex: 1, backgroundColor: '#eee', color: '#000'}}
        />
        <Button title="Submit" onPress={() => setReset(prev => !prev)} />
      </View>
      {!loading ? (
        <FlatList
          data={news}
          renderItem={({item}) => <NewsCard news={item} />}
        />
      ) : (
        <ActivityIndicator size={'large'} style={{marginTop: 50}} />
      )}
    </View>
  );
}
