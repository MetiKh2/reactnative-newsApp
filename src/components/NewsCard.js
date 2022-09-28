/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
  Share,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {onShare} from './../utils/share';
import {isBookmark, onBookmark} from '../utils/bookmark';

const windowWidth = Dimensions.get('window').width;

const NewsCard = ({news}) => {
  const navigation = useNavigation();
  const [isBookmarkNews, setIsBookmarkNews] = useState(false);
  useEffect(() => {
    const getBookmark = async () => {
      if (await isBookmark(news?.url)) setIsBookmarkNews(true);
    };
    getBookmark();
  }, []);

  return (
    <Pressable
      style={{margin: 10}}
      onPress={() => navigation.navigate('NewsDetail', {news: news})}>
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: news?.image}}
          style={{
            width: windowWidth - 20,
            height: 180,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          loadingIndicatorSource={require('../assets/indicator.gif')}
        />
        <Entypo
          style={{position: 'absolute', right: 20, top: 10}}
          name="bookmark"
          size={30}
          color={isBookmarkNews ? 'orangered' : '#fff'}
          onPress={async () => {
            await onBookmark(news?.url);
            if(await isBookmark(news?.url))setIsBookmarkNews(true) 
            else setIsBookmarkNews(false)
          }}
        />
        <Entypo
          onPress={() => onShare(news?.title, news?.description, news?.url)}
          style={{
            position: 'absolute',
            bottom: -20,
            right: 20,
            zIndex: 1,
            backgroundColor: '#fff',
            padding: 5,
            borderRadius: 50,
            borderWidth: 1,
          }}
          name="share"
          size={30}
          color="#000"
        />
      </View>
      <View style={{padding: 15, backgroundColor: '#fff'}}>
        <Text style={{color: '#000', fontSize: 16}}>
          {news?.title?.substring(0, 40) + '...'}
        </Text>
        <Text style={{color: 'grey', fontSize: 10, marginTop: 5}}>
          {news?.publishedAt}
        </Text>
      </View>
    </Pressable>
  );
};

export default NewsCard;
