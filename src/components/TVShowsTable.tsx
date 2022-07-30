import * as React from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect, useState} from "react";
import {addToFavorites, fetchTvShows} from "../store/slices/movieSlice";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";


export default function TVShowsTable() {

    const movies = useAppSelector((state) => state.moviesReducer.tvShows)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [showFavoriteButton, setShowFavoriteButton] = useState(false)
    const [selectedFavorite, setSelectedFavorites] = useState<number[]>([])

    useEffect(() => {
        dispatch(fetchTvShows())
    }, [])

    const rows = movies.map((tvShow: any) => {
        return {
            id: tvShow.id,
            showName: tvShow.name,
            airDate: tvShow.airdate,
            rating: tvShow.rating.average,
            description: tvShow.summary
        }
    })

    console.log(movies)

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'showName',
            headerName: 'Show Name',
            width: 250,
            editable: true,
        },
        {
            field: 'airDate',
            headerName: 'Air Date',
            width: 100,
            editable: true,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            width: 90,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Description',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 800,
        },
    ];

    return (
        <div style={{height: 700, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                onSelectionModelChange={(selectionModel)=>{
                    setSelectedFavorites(selectionModel as number[])
                    if (selectionModel.length === 0) {
                        setShowFavoriteButton(false)
                    } else if (selectionModel.length === 1 || selectionModel.length === rows.length) {
                        setShowFavoriteButton(true)
                    }
                }}
            />
            {showFavoriteButton ? <Button onClick={() => {
                dispatch(addToFavorites(selectedFavorite))
            }}>
                Add to favorites
            </Button> : null}
            <Button onClick={() => {
                navigate('favorites')
            }}>
                Favorites
            </Button>
        </div>
    );
}
