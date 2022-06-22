import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deviceApi} from "../../api/deviceApi";
import {BrandTypeBar} from "./BrandTypeBar/BrandTypeBar";
import {DeviceList} from "./DeviceList/DeviceList";
import {Box, Grid} from '@mui/material';
import {isSelectedBrand, isSelectedType, setDevices, setTotalCount} from "../../store/devices/devicesAction";
import {setBrandsRequest, setDevicesRequest, setTypesRequest} from "../../store/devices/devicesThunk";
import {getBrands, getPage, getSelectedBrand, getSelectedType, getTypes} from "../../store/devices/devicesSelectors";

const MainPage = () => {
    const dispatch = useDispatch();
    const types = useSelector(getTypes);
    const brands = useSelector(getBrands);
    const selectedType = useSelector(getSelectedType);
    const selectedBrand = useSelector(getSelectedBrand);
    const page = useSelector(getPage);

    useEffect(() => {
        dispatch(setTypesRequest());
        dispatch(setBrandsRequest());
        dispatch(setDevicesRequest());
    }, [dispatch]);

    useEffect(() => {
        deviceApi.fetchDevices(selectedType.id, selectedBrand.id, page, 2)
            .then(data => {
                dispatch(setDevices(data.rows));
                dispatch(setTotalCount(data.count));
        });
    }, [page, selectedType, selectedBrand, dispatch]);

    const onSelectType = (item) => {
        dispatch(isSelectedType(item));
    };

    const onSelectBrand = (item) => {
        dispatch(isSelectedBrand(item));
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

export default MainPage;