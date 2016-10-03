import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//axios was npm installed it is a tool for HTPPRequests
import axios from 'axios';
//importing component to use inside of class component
import AlbumDetail from './AlbumDetail';

//This makes a class component which can handle data
class AlbumList extends Component {
  //sets state to an object with a key value pair
  state = { albums: [] };
  //when the page loads the HTTPrequest is done asynch
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }
  //this grabs the info coming in from the HTTPRequest and puts it into a component
  renderAlbums() {
    return this.state.albums.map(album =>
      //album= is setting the prop for the component, it is not necessary to name it album
      <AlbumDetail key={album.title} album={album} />);
  }
  //renders the class component
  render() {
    return (
        <ScrollView>
          { this.renderAlbums() }
        </ScrollView>
      );
    }
  }


export default AlbumList;
