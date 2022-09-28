/* eslint-disable prettier/prettier */
import {View, Text, Image, Dimensions} from 'react-native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { ScrollView } from 'react-native-gesture-handler';
import { onShare } from '../utils/share';
import { isBookmark, onBookmark } from '../utils/bookmark';
const windowWidth = Dimensions.get('window').width;

export default function NewsDetailScreen({route}) {
  const {news} = route?.params;
  const [isBookmarkNews, setIsBookmarkNews] = useState(false);
  useEffect(() => {
    const getBookmark = async () => {
      if (await isBookmark(news?.url)) setIsBookmarkNews(true);
    };
    getBookmark();
  }, []);

  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: news?.image}}
          style={{width: windowWidth, height: 350,resizeMode:'stretch'}}
          loadingIndicatorSource={require('../assets/indicator.gif')}
        />
        <Entypo
          style={{position: 'absolute', right: 20, top: 10}}
          name="bookmark"
          size={30}
          color={isBookmarkNews?"orangered":"#fff"}
          onPress={async () => {
            await onBookmark(news?.url);
            if(await isBookmark(news?.url))setIsBookmarkNews(true) 
            else setIsBookmarkNews(false)
          }}
        />
        <Entypo
        onPress={()=>onShare(news?.title,news?.description,news?.url)}
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

      <View style={{paddingHorizontal:20,paddingVertical:30}}>
        <Text style={{color:'#fff',fontSize:16}}>{news?.title}</Text>
        <Text style={{color:'grey',fontSize:10,marginTop:5}}>{news?.publishedAt}</Text>
       </View>
       <ScrollView style={{paddingHorizontal:20,paddingVertical:20,flex:1}}>
       <View style={{paddingBottom:35}}>
        <Text style={{fontSize:13,lineHeight:20}}>{news?.description}</Text>
        <Text style={{fontSize:15,lineHeight:25,marginTop:10,color:'#fff'}}>{news?.content}</Text>
       </View>
       </ScrollView>
    </View>
  );
}
