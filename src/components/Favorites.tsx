import React, {useEffect, useState} from 'react';
import {useAppSelector} from "../store/hooks";
import TVShowCards from "./TVShowCards";
import {ITvShow} from "../store/slices/movieSlice";
import {getFavorites} from "../services/firebase";

const Favorites = () => {
    const favorites = useAppSelector((state) => state.moviesReducer.favorites)
    const tvShows = useAppSelector((state) => state.moviesReducer.tvShows)
    const [firestoreFavorites, setFirestoreFavorite] = useState<any>([])

    const getFavoritesFromFirestore = async () => {
        const getFavoritesArray = await getFavorites()
        setFirestoreFavorite(getFavoritesArray)

    }

     useEffect(() => {
         getFavoritesFromFirestore()
    },[])

    console.log('favorites from firestore', firestoreFavorites)

        const renderFavorites = favorites.reduce((prev,curr) => {
            const tvShow = tvShows.find(tvShow => tvShow.id === curr)
            if(tvShow){
                prev.push(tvShow)
            }
            return prev
        },([] as ITvShow[]))

    console.log('renderFavorites', renderFavorites)

    return (
        <div>
            <TVShowCards favorites={renderFavorites}/>
        </div>
    );
};

export default Favorites;