import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const photos = JSON.parse(xhr.response);
        this.setState = ({
          photos: photos
        })
      }
    }
    xhr.send(null);
  }

  render() {
    const photos = this.state.photos.map(photo => (
      <div key={photo.id}>
        <h1>{photo.title}</h1>
      </div>
    ))
    return (
      <div>
        {photos}
      </div>
    );
  }
}

export default App;
