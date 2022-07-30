import * as React from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import {fetchMovies} from "../store/slices/movieSlice";


export default function TVShowsTable() {

    const Movies = useAppSelector((state) => state.moviesReducer.movies)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const rows = Movies.map((tvShow: any) => {
        return {
            id: tvShow.id,
            showName: tvShow.name,
            airDate: tvShow.airdate,
            rating: tvShow.rating.average,
            description: tvShow.summary
        }
    })

    console.log(Movies)

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', width: 90},
        {
            field: 'show',
            headerName: 'Show Name',
            width: 150,
            editable: true,
        },
        {
            field: 'airDate',
            headerName: 'Air Date',
            width: 150,
            editable: true,
        },
        {
            field: 'rating',
            headerName: 'Rating',
            type: 'number',
            width: 110,
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
        <div style={{height: 800, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
