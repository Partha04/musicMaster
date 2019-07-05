import React ,{Component}from 'react';

import './App.css';
import Artist from './artists';
import Tracks from './tracks'

const Api_adress='https://spotify-api-wrapper.appspot.com'
class App extends Component {
  state = { artistQuery:'',artist:null,tracks:[] }


  updateArtistQuary=(event)=>{
    this.setState({artistQuery:event.target.value})
  }
  handleKeypress=(event)=>{
    if(event.key==='Enter')
    {
      this.searchArtist();
    }
  }
  searchArtist=()=>{
    fetch(`${Api_adress}/artist/${this.state.artistQuery}`)
    .then(response=>response.json())
    .then(json=>{
    if(json.artists.total>0){
      const artist=json.artists.items[0];
      this.setState({artist:artist});

      fetch(`${Api_adress}/artist/${artist.id}/top-tracks`)
      .then(response=>response.json())
      .then(json=>this.setState({tracks:json.tracks}))
      .catch(error=>alert(error.message));

    }
  })

    
  }

  render() { 
    console.log(this.state);
    return ( <div>
      <h1>Music Master</h1>
      <input  
      placeholder="Search for a Artist" 
      onChange={this.updateArtistQuary}
      onKeyPress={this.handleKeypress}
      className="searchbar"
      />
      <button onClick={this.searchArtist} className="button">Search</button>

      <Artist artist={this.state.artist}/>
      <Tracks tracks={this.state.tracks}/>

    </div> );
  }
}
 
export default App;