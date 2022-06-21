import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchOneDevice} from "../../store/devicesReducer";

import { Box, Button, Card, CardActions, CardContent, Grid, Rating, Typography } from '@mui/material';


export const DevicePage = () => {
    const dispatch = useDispatch();
    const device =  useSelector(state => state.devices.selectedDevice);
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        dispatch(fetchOneDevice(id))
    }, [])
    console.log(device)
    return (
        <>
            {device && (
                <>
                    <Box my={2} sx={{ textAlign: 'center' }}>
                        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#006f74' }}>
                            {device.name}
                        </Typography>
                    </Box>
                    <Grid container>
                        <Grid item xs={12} md={6} display={'flex'} justifyContent="center" alignItems="center">
                            <Box
                                component="img"
                                sx={{
                                    height: 450,
                                    maxHeight: { xs: 250, md: 350 },
                                    display: 'inline-block',
                                    // borderRadius: '12px',
                                    // boxShadow: 12,
                                }}
                                alt={device.name}
                                src={`http://localhost:5000/${device.img}`}
                            />
                        </Grid>
                        {!!device.info.length && (
                            <>
                                <Grid my={2} display={'flex'} justifyContent={'center'}>
                                    <Typography gutterBottom variant="h4" component="div">
                                        Характеристики
                                    </Typography>
                                </Grid>
                                {device.info.map((description, ind) => {
                                    return (
                                        <Grid key={ind} sx={{ backgroundColor: ind % 2 === 0 ? 'background' : 'lightGray' }}>
                                            <Typography mb={'0'} gutterBottom variant="subtitle1" component="div" sx={{}}>
                                                {`${description.title}:${description.description}`}
                                            </Typography>
                                        </Grid>
                                    );
                                })}
                            </>
                        )}
                        <Grid
                            item
                            xs={12}
                            md={2}
                            pb={{ xs: '2rem', md: 0 }}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Card sx={{ padding: 2, boxShadow: 5, borderRadius: '6px' }}>
                                <CardContent>
                                    <Grid display={'flex'} flexDirection={'column'} alignItems={'center'}>
                                        <Typography gutterBottom variant="h5" component="div" color="primary">
                                            Цена:
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {`${device.price} руб.`}
                                        </Typography>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="medium" sx={{ marginBottom: 1 }}>
                                        В корзину
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};