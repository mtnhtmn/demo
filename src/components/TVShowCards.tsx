import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {ITvShow} from "../store/slices/movieSlice";

interface IProps {
    favorites: ITvShow[]
}

export default function TVShowCards({favorites}:IProps) {

    const renderFavorites = favorites.map((favorite) => {
        return (
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={favorite.image?.original}
                        alt="tvShow-image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {favorite.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {favorite.summary}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        {favorite.url}
                    </Button>
                </CardActions>
            </Card>
        )
    })

    console.log(favorites)

    return (
        <div>
            {renderFavorites}
        </div>
    );
}
