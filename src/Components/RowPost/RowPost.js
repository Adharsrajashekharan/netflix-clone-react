import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

import './RowPost.css'
import {API_KEY, imageUrl } from '../../Constants/Constants'
function RowPost(props) {
    
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState('')
    useEffect(() => {
      axios.get(props.url).then(response=>{
        console.log(response.data);
        setMovies(response.data.results)
      }).catch(err=>{
        //alert('network e')
      })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie =(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('empty one !!!')

            }
        })
      }
    return (
        <div className='row'>
        <div className='t'>{props.title}</div>        
            <div className='posters'>
                {movies.map((obj)=>
                    <img onClick={()=>
                        handleMovie(obj.id)
                    } className={props.isSmall?'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
               
                )}
                
        </div>
       {urlId && <YouTube videoId={urlId.key} opts={opts}  />}
        </div>
    )
}

export default RowPost