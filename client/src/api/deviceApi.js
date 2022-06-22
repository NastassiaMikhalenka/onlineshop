import {instanceAxios} from './instanceAxios';

export const deviceApi = {
    async fetchTypes() {
        const {data} = await instanceAxios.get('api/type');
        return data;
    },

    async fetchBrands() {
        const {data} = await instanceAxios.get('api/brand');
        return data;
    },
    async fetchDevices(typeId, brandId, page, limit) {
        const {data} = await instanceAxios.get('api/device', {
            params: {
                typeId, brandId, page, limit
            },
        });
        return data;
    },

    async fetchOneDevice(id) {
        const {data} = await instanceAxios.get('api/device/' + id);
        return data;
    },
};
