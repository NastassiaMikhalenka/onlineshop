import {setIsError, setIsLoading} from "../auth/authAction";
import {deviceApi} from "../../api/deviceApi";
import {isSelectedDevice, setBrands, setDevices, setTotalCount, setTypes} from "./devicesAction";

export const setTypesRequest = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        deviceApi.fetchTypes()
            .then((data) => {
                dispatch(setTypes(data));
            })
            .catch(e => {
                dispatch(setIsError(e.response.data.message));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};

export const setBrandsRequest = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        deviceApi.fetchBrands()
            .then((data) => {
                dispatch(setBrands(data));
            })
            .catch(e => {
                dispatch(setIsError(e.response.data.message));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};

export const setDevicesRequest = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        deviceApi.fetchDevices(null, null, 1, 10)
            .then((data) => {
                dispatch(setDevices(data.rows));
                dispatch(setTotalCount(data.count));
            })
            .catch(e => {
                dispatch(setIsError(e.response.data.message));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};

export const fetchOneDevice = (id) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        deviceApi.fetchOneDevice(id)
            .then((data) => {
                console.log(data)
                dispatch(isSelectedDevice(data));
            })
            .catch(e => {
                dispatch(setIsError(e.response.data.message));
            })
            .finally(() => {
                dispatch(setIsLoading(false));
            })
    }
};