//imports a library
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';
// import AlbumDetail from './src/Components/AlbumDetail';


//create Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//renders component
AppRegistry.registerComponent('albums', () => App);
