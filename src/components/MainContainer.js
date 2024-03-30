import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
// import VideoBG from './VideoBackground';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.popularMovies);
if (!movies){
    return;
}
const index = Math.floor(Math.random() * 10)
    const mainMovie = movies[index];
    // console.log(movies)
    const{original_title,overview,id} = mainMovie;
    // console.log(mainMovie);

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground  movieId={id}/>
    </div>
  )
}

export default MainContainer