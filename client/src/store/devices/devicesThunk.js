import {setIsError, setIsLoading} from "../auth/authAction";
import {deviceApi} from "../../api/deviceApi";
import {isSelectedDevice, setBrands, setDevices, setTotalCount, setTypes} from "./devicesAction";

export const fetchTypes = () => {
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

export const fetchBrands = () => {
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

// ?? проверить
// export const setDevicesRequest = () => {
//     return (dispatch) => {
//         dispatch(setIsLoading(true));
//         deviceApi.fetchDevices(null, null, 1, 10)
//             .then((data) => {
//                 dispatch(setDevices(data.rows));
//                 dispatch(setTotalCount(data.count));
//             })
//             .catch(e => {
//                 dispatch(setIsError(e.response.data.message));
//             })
//             .finally(() => {
//                 dispatch(setIsLoading(false));
//             })
//     }
// };

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

export const fetchDevices = (selectedTypeId, selectedBrandId, page, limit) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        deviceApi.fetchDevices(selectedTypeId, selectedBrandId, page, limit)
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