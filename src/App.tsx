import React, {useEffect, useState} from 'react';
import TVShowsTable from "./components/TVShowsTable";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Favorites from "./components/Favorites";

const App = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<TVShowsTable/>}/>
                    <Route path="favorites" element={<Favorites/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};

export default App;
