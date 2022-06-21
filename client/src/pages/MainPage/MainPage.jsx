import React, {useEffect} from 'react';
import {
    isSelectedBrandAC,
    isSelectedTypeAC,
    setBrandsTC,
    setDevicesAC,
    setDevicesTC,
    setTotalCountAC,
    setTypesTC
} from "../../store/devicesReducer";
import {useDispatch, useSelector} from "react-redux";
import {deviceApi} from "../../api/deviceApi";
import {BrandTypeBar} from "./BrandTypeBar/BrandTypeBar";
import {DeviceList} from "./DeviceList/DeviceList";
// import {Pages} from "./Pages/Pages";
import { Box, Grid } from '@mui/material';


export const MainPage = () => {

    const dispatch = useDispatch();
    const devicesStore = useSelector(state => state.devices)
    const types = useSelector(state => state.devices.types);
    const brands = useSelector(state => state.devices.brands);



    const selectedType = useSelector(state => state.devices.selectedType);
    const selectedBrand = useSelector(state => state.devices.selectedBrand);

    useEffect(() => {
        dispatch(setTypesTC())
        dispatch(setBrandsTC())
        dispatch(setDevicesTC())
    }, [])

    useEffect(() => {
        deviceApi.fetchDevices(devicesStore.selectedType.id, devicesStore.selectedBrand.id, devicesStore.page, 2)
            .then(data => {
                dispatch(setDevicesAC(data.rows))
                dispatch(setTotalCountAC(data.count))
        })
    }, [devicesStore.page, devicesStore.selectedType, devicesStore.selectedBrand,])


    const onSelectType = (item) => {
        dispatch(isSelectedTypeAC(item));
    };

    const onSelectBrand = (item) => {
        dispatch(isSelectedBrandAC(item));
    };


    return (
        <Grid container spacing={2} py={2}>
            <Grid
                item
                xs={12}
                md={3}
                sx={{ display: { xs: 'flex', md: 'block' }, flexDirection: 'column', alignItems: { xs: 'center' } }}
            >
                <BrandTypeBar
                    title={'Plants'}
                    items={types}
                    selectedItem={selectedType}
                    onSelectItem={onSelectType} />
                <Box sx={{ height: '2rem' }} />
                <BrandTypeBar
                    title={'Plants Type'}
                    items={brands}
                    selectedItem={selectedBrand}
                    onSelectItem={onSelectBrand}
                />
            </Grid>
            <Grid
                item
                xs={12}
                md={9}
                sx={{ paddingRight: { xs: 0, md: '16px' }, maxHeight: 'calc(100vh - 64px)', overflowY: { md: 'scroll' } }}
            >
                <DeviceList />
            </Grid>
        </Grid>

        // <div>
        //     <BrandTypeBar/>
        //     <DeviceList/>
        //     {/*<Pages/>*/}
        // </div>
    );
};