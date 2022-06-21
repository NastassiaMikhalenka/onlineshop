import {setIsErrorAC, setIsLoadingAC} from "./userReducer";
import {deviceApi} from "../api/deviceApi";


const initialStateDevices = {
    types: [],
    brands: [],
    devices: [],
    selectedType: {},
    selectedBrand: {},
    selectedDevice: {info: []},
    page: 1,
    totalCount: 0,
    limit: 10,
    isLoading: false,
};


export const devicesReducer = (state = initialStateDevices, action) => {
    switch (action.type) {

        case "devices/SET_TYPES":
            return {
                ...state,
                types: action.payload.types,
            }

        case "devices/SET_BRANDS":
            return {
                ...state,
                brands: action.payload.brands,
            }

        case "devices/SET_DEVICES":
            return {
                ...state,
                devices: action.payload.devices,
            }

        case "devices/SET_TOTAL_COUNT":
            return {
                ...state,
                totalCount: action.payload.totalCount,
            }

        case "devices/IS_SELECTED_BRAND":
            return {
                ...state,
                selectedBrand: action.payload.selectedBrand,
            }
        case "devices/IS_SELECTED_TYPE":
            return {
                ...state,
                selectedType: action.payload.selectedType,
            }

        case "devices/IS_SELECTED_DEVICE":
            return {
                ...state,
                selectedDevice: action.payload.selectedDevice,
            }

        default: {
            return state
        }
    }
};



export const setTypesAC = (types) => {
    return {
        type: 'devices/SET_TYPES',
        payload: {
            types: types,
        },
    }
};

export const setBrandsAC = (brands) => {
    return {
        type: 'devices/SET_BRANDS',
        payload: {
            brands: brands,
        },
    }
};

export const setDevicesAC = (devices) => {
    return {
        type: 'devices/SET_DEVICES',
        payload: {
            devices: devices,
        },
    }
};

export const setTotalCountAC = (totalCount) => {
    return {
        type: 'devices/SET_TOTAL_COUNT',
        payload: {
            totalCount: totalCount,
        },
    }
};

export const isSelectedBrandAC = (selectedBrand) => {
    return {
        type: 'devices/IS_SELECTED_BRAND',
        payload: {
            selectedBrand: selectedBrand,
        },
    }
};
export const isSelectedTypeAC = (selectedType) => {
    return {
        type: 'devices/IS_SELECTED_TYPE',
        payload: {
            selectedType: selectedType,
        },
    }
};





export const isSelectedDeviceAC = (selectedDevice) => {
    return {
        type: 'devices/IS_SELECTED_DEVICE',
        payload: {
            selectedDevice: selectedDevice,
        },
    }
};





export const setTypesTC = () => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        deviceApi.fetchTypes()
            .then((data) => {
                dispatch(setTypesAC(data))
            })
            .catch(e => {
                console.log(e.response.data.message)
                dispatch(setIsErrorAC(e.response.data.message))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
};

export const setBrandsTC = () => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        deviceApi.fetchBrands()
            .then((data) => {
                dispatch(setBrandsAC(data))
            })
            .catch(e => {
                console.log(e.response.data.message)
                dispatch(setIsErrorAC(e.response.data.message))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
};

export const setDevicesTC = () => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        deviceApi.fetchDevices(null, null, 1, 10)
            .then((data) => {
                dispatch(setDevicesAC(data.rows))
                dispatch(setTotalCountAC(data.count))
            })
            .catch(e => {
                console.log(e.response.data.message)
                dispatch(setIsErrorAC(e.response.data.message))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
};


export const fetchOneDevice = (id) => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true));
        deviceApi.fetchOneDevice(id)
            .then((data) => {
                console.log(data)
                dispatch(isSelectedDeviceAC(data))
            })
            .catch(e => {
                console.log(e.response.data.message)
                dispatch(setIsErrorAC(e.response.data.message))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false));
            })
    }
};
