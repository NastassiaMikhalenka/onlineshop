import React from 'react';
import {useNavigate} from "react-router-dom";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';


export const DeviceListItem = ({device}) => {
    const navigate = useNavigate();
    const onClickSelectDevice = () => {
        navigate(`/device/${device.id}`);
    };

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'space-between',
                boxShadow: '4px 4px 8px 0px rgba(0, 111, 116, 0.2)',
                ':hover': {
                    transform: 'scale(1.02)',
                    cursor: 'pointer',
                },
                marginRight: '15px'
            }}

        >
            <CardContent>
                <CardMedia
                    component="img"
                    height="140"
                    image={`http://localhost:5000/${device.img}`}
                    alt={device.name}
                    sx={{
                        '&.MuiCardMedia-img': {
                            objectFit: 'contain',
                        },
                    }}
                />
                <Box component={'div'}>
                    <Typography gutterBottom variant="h6" component="div">
                        {device.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {`${device.price} £`}
                    </Typography>
                </Box>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box
                    component={'div'}
                    sx={{ display: 'flex', flexDirection: 'column', width: '100%', marginBottom: '0.5rem', alignItems: 'start' }}
                >
                    <Box component={'div'} sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        <Button
                            color="teal"
                            variant={'text'}
                            size="medium"
                            sx={{ display: 'flex', fontSize: '12px' }}
                            onClick={onClickSelectDevice}
                        >
                            Detailed
                        </Button>
                        <Button color="teal" variant={'outlined'} size="small" sx={{ display: 'flex'}}>
                            Add to bag
                        </Button>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};