import * as React from 'react';
import {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Grid, Typography} from '@mui/material';
import BasicTabs from "./TabDescriptionDevice/TabDescriptionDevice";
import {fetchOneDevice} from "../../store/devices/devicesThunk";
import {getSelectedDevice} from "../../store/devices/devicesSelectors";
import {getIsLoading} from "../../store/auth/authSelectors";
import {LoadingLine} from "../../components/loadingLine/loadingLine";

const DevicePage = () => {
    const dispatch = useDispatch();
    const device = useSelector(getSelectedDevice);
    const {id} = useParams();
    const loading = useSelector(getIsLoading);

    useEffect(() => {
        dispatch(fetchOneDevice(id));
    }, []);

    return (
        <>
                {loading && <LoadingLine/>}
            {device && (
                <>
                    <Grid container marginTop={'40px'}>
                        <Grid item xs={2} md={8} display={'flex'} justifyContent="spaceBetween"
                              style={{margin: 'auto'}}>
                            <div>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 550,
                                        maxHeight: {xs: 350, md: 450},
                                        display: 'inline-block',
                                    }}
                                    alt={device.name}
                                    src={`http://localhost:5000/${device.img}`}
                                />
                            </div>
                            <div style={{display: 'flex', alignItem: 'center', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="h4" textAlign="center" component="div"
                                            sx={{fontWeight: 'bold', color: '#006f74'}}>
                                    {device.name}
                                </Typography>
                                <Typography variant="h6" component="div" textAlign="center" fontSize={'22px'}>
                                    {`${device.price} £`}
                                </Typography>
                                {!!device.info.length && <BasicTabs device={device}/>}
                                <Button color="teal" variant="outlined" size="medium" sx={{margin: 'auto', alignItems: 'center'}} >
                                    Add to bag
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
};

export default DevicePage;