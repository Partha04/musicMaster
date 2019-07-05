import React from 'react';

const Artist=({artist})=>{
if(!artist) return null;

const {images ,name,followers,genres} = artist;

return(
    <div>
        <img src={images[0] && images[0].url} alt='artist profile' 
        style={{width:200,height:200,borderRadius:100,objectFit:'cover'}} className="artistimg"/>
        <h2 className="aname">{name}</h2>
        <p>{followers.total } Followers</p>
        <p>{genres.join(',')}</p>
        
    </div>
)

}
export default Artist;