import * as React from 'react';
import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useEffect} from "react";
import {fetchMovies} from "../store/slices/movieSlice";

interface IProps {
    tvShows: {}[]
}



export default function TVShowsTable({tvShows}: IProps) {

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
            // valueGetter: (params: GridValueGetterParams) =>
            //     `${params.getValue(params.id, 'firstName') || ''} ${
            //         params.getValue(params.id, 'lastName') || ''
            //     }`,
        },
    ];

    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];
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
