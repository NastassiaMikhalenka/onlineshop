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
        case 'devices/SET_TYPES':
            return {...state, types: action.payload.types,}
        case 'devices/SET_BRANDS':
            return {...state, brands: action.payload.brands,}
        case 'devices/SET_DEVICES':
            return {...state, devices: action.payload.devices,}
        case 'devices/SET_TOTAL_COUNT':
            return {...state, totalCount: action.payload.totalCount,}
        case 'devices/IS_SELECTED_BRAND':
            return {...state, selectedBrand: action.payload.selectedBrand,}
        case 'devices/IS_SELECTED_TYPE':
            return {...state, selectedType: action.payload.selectedType,}
        case 'devices/IS_SELECTED_DEVICE':
            return {...state, selectedDevice: action.payload.selectedDevice,}
        default: {
            return state;
        }
    }
};
