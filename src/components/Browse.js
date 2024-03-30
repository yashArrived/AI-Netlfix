import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';



const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    useNowPlayingMovies();
    usePopularMovies();

    useUpcomingMovies()

  return (
    <div>
      <Header/>
      {showGptSearch ? <GPTSearch/> : <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
      
      {/* 
          Main Container
            - VideoBG
            - VideoTitle
          Secondary Container
            - MovieList*n
              - cards * n

      */}

    </div>
  )
}

export default Browse