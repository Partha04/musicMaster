import React,{Component} from 'react';
class Tracks extends Component {
    state = { playing:false ,audio:null,playingUrl:null}

    playAudio=prevUrl=>()=>{
        const audio =new  Audio(prevUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({playing:true,audio,playingUrl:prevUrl})
        }
        else{
            this.state.audio.pause();

            if(this.state.playingUrl===prevUrl)
            {this.setState({playing:false})}

            else{
                audio.play();
                this.setState({audio,playingUrl:prevUrl})
            }

            
        }
        
    }

    trackicon=track=>
    {   if(!track.preview_url){
        return <span>n/a</span>
    }

        if(this.state.playing&&this.state.playingUrl===track.preview_url)
        {
            return <span>||</span>
        }
        else
        {
            return <span>&#9654;</span>
        }
    }
    render() {
        const {tracks}= this.props;
        
        return (
            <div>
                {
                    tracks.map(track=>{
                        const{id,name,album,preview_url}=track;

                        return(
                            <div key={id} onClick={this.playAudio(preview_url)} className='track'>
                                <img src={album.images[0].url}
                                 alt="trackimg" 
                                 className='trackimg' />
                                <p className='title'>{name}</p>
                                <p className='trackicon'>{this.trackicon(track)}</p>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}
 
export default Tracks;
