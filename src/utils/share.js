/* eslint-disable prettier/prettier */
import { Alert, Share } from "react-native";

export  const onShare = async (title,message,url) => {
    try {
      const result = await Share.share({
        title,
        message:title+"\n\n"+message+'\n\n'+url,
        url,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };