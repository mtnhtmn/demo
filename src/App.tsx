import React, {useEffect, useState} from 'react';
import TVShowsTable from "./components/TVShowsTable";
import {Provider} from "react-redux";
import {store} from "./store/store";

const App = () => {
    const [tvShows, setTvShows] = useState([])

    const getTVShows = () => {
        fetch('https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US')
            .then(response => response.json())
            .then(response => {
                setTvShows(response)
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getTVShows()
    }, [])

    return (
        <div>
            <Provider store={store}>
                <TVShowsTable tvShows={tvShows}/>
            </Provider>
        </div>
    );
};

export default App;
