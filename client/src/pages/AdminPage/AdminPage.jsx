import React from 'react';
import Button from '@mui/material/Button';
import CreateBrand from "./CreateBrand/CreateBrand";
import CreateType from "./CreateType/CreateType";
import CreateDevice from "./CreateDevice/CreateDevice";
import {Grid} from "@mui/material";
import DevicePage from "../DevicePage/DevicePage";
import {DeviceList} from "../MainPage/DeviceList/DeviceList";
import {resetError} from "../../store/auth/authAction";
import {useDispatch} from "react-redux";


const AdminPage = () => {
    const [brandVisible, setBrandVisible] = React.useState(false);
    const [typeVisible, setTypeVisible] = React.useState(false);
    const [deviceVisible, setDeviceVisible] = React.useState(false);
    const dispatch = useDispatch();

    const handleOpen = (name) => {
        switch (name) {
            case 'brandVisible':
                setBrandVisible(true);
                break;
            case 'typeVisible':
                setTypeVisible(true);
                break;
            case 'deviceVisible':
                setDeviceVisible(true);
                break;
        }
    }

    const handleClose = (name) => {
        switch (name) {
            case 'brandVisible':
                setBrandVisible(false);
                dispatch(resetError())
                break;
            case 'typeVisible':
                setTypeVisible(false);
                dispatch(resetError())
                break;
            case 'deviceVisible':
                setDeviceVisible(false);
                dispatch(resetError())
                break;
        }
    }

    return (
        <Grid
            item
            xs={8}
            md={6}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fcfeff',
                marginTop: '50px',
            }}
        >
            <Button onClick={() => handleOpen('brandVisible')} color={'teal'} variant="outlined">Add Brand</Button>
            <Button onClick={() => handleOpen('typeVisible')} color={'teal'} variant="outlined">Add Type</Button>
            <Button onClick={() => handleOpen('deviceVisible')} color={'teal'} variant="outlined">Add Device</Button>
            <CreateBrand handleClose={handleClose} open={brandVisible}/>
            <CreateType handleClose={handleClose} open={typeVisible}/>
            <CreateDevice handleClose={handleClose} open={deviceVisible}/>
        </Grid>
    );
};

export default AdminPage;