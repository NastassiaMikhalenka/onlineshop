import React from 'react';
import {useSelector} from "react-redux";
import {DeviceListItem} from "./DeviceListItem/DeviceListItem";
import {Grid} from '@mui/material';
import {getDevices} from "../../../store/devices/devicesSelectors";

export const DeviceList = () => {
    const devices = useSelector(getDevices);

    return (
        <Grid container>
            {devices.map((device) => (
                <Grid key={device.id} item xs={12} md={5} lg={4} style={{display: 'flex', paddingBottom: '1rem'}}>
                    <DeviceListItem device={device}/>
                </Grid>
            ))}
        </Grid>
    );
};