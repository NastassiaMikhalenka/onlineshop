import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DeviceListItem} from "./DeviceListItem/DeviceListItem";
import { Grid } from '@mui/material';


export const DeviceList = () => {
    const devices = useSelector(state => state.devices.devices);
    console.log(devices)

    return (

        <Grid container>
            {devices.map((device) => (
                <Grid key={device.id} item xs={12} md={5} lg={4} style={{ display: 'flex', paddingBottom: '1rem' }}>
                    <DeviceListItem device={device} />
                </Grid>
            ))}
        </Grid>
    );
};