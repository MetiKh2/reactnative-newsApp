/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
export const onBookmark = async url => {
  const bookmarksString =
    (await AsyncStorage.getItem('bookmarks_news')) || JSON.stringify([]);
  const bookmarks = JSON.parse(bookmarksString);
  let newBookmarks = [];
  if (bookmarks.filter(p => p == url).length > 0) {
    newBookmarks = bookmarks.filter(p => p != url);
  } else {
      bookmarks.push(url);
      newBookmarks=bookmarks;
  }
  await AsyncStorage.setItem('bookmarks_news', JSON.stringify(newBookmarks));
  console.log(await AsyncStorage.getItem('bookmarks_news'));
};
export const isBookmark = async url => {
  const bookmarksString =
    (await AsyncStorage.getItem('bookmarks_news')) || '[]';
  const bookmarks = JSON.parse(bookmarksString);
  if (bookmarks.filter(p => p == url).length > 0) return true;
  else return false;
};
