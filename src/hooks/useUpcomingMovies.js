import { useDispatch, useSelector } from "react-redux"
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


// This component is of TOP RATED movies
        const useUpcomingMovies = () => {

            const dispatch = useDispatch();

            const upcomingMovies = useSelector((stor) => stor.movies.upcomingMovies);
            const getUpcomingMovies = async () => {
                const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
                API_OPTIONS);
                const json = await data.json();
                dispatch(addUpcomingMovies(json.results));

            };

            useEffect(()=>{
                !upcomingMovies && getUpcomingMovies();
            },[])
        }

    export default useUpcomingMovies;