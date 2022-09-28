/* eslint-disable prettier/prettier */
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {API_TOKEN} from '../constants';
import NewsCard from '../components/NewsCard';
const NewsCategoryScreen = ({route}) => {
  const [news, setNews] = useState([]);
  const {category} = route?.params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (category) {
      setLoading(true);
      fetch(
        `https://gnews.io/api/v4/top-headlines?topic=${category}&lang=es&token=${API_TOKEN}`,
      )
        .then(res => res.json())
        .then(json => {
          setNews(json.articles);
          setLoading(false);
        });
    }
  }, []);
  return (
    <View style={{backgroundColor: '#eee', flex: 1}}>
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
};

export default NewsCategoryScreen;
