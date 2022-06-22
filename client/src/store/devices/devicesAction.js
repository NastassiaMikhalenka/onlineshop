export const setTypes = (types) => {
    return {
        type: 'devices/SET_TYPES',
        payload: {types: types,},
    }
};

export const setBrands = (brands) => {
    return {
        type: 'devices/SET_BRANDS',
        payload: {brands: brands,},
    }
};

export const setDevices = (devices) => {
    return {
        type: 'devices/SET_DEVICES',
        payload: {devices: devices,},
    }
};

export const setTotalCount = (totalCount) => {
    return {
        type: 'devices/SET_TOTAL_COUNT',
        payload: {totalCount: totalCount,},
    }
};

export const isSelectedBrand = (selectedBrand) => {
    return {
        type: 'devices/IS_SELECTED_BRAND',
        payload: {selectedBrand: selectedBrand,},
    }
};

export const isSelectedType = (selectedType) => {
    return {
        type: 'devices/IS_SELECTED_TYPE',
        payload: {selectedType: selectedType,},
    }
};

export const isSelectedDevice = (selectedDevice) => {
    return {
        type: 'devices/IS_SELECTED_DEVICE',
        payload: {selectedDevice: selectedDevice,},
    }
};