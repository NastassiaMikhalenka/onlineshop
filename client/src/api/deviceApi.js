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
    // удален лимит
    async fetchDevices(typeId, brandId, page) {
        const {data} = await instanceAxios.get('api/device', {
            params: {
                typeId, brandId, page,
            },
        });
        return data;
    },

    async fetchOneDevice(id) {
        const {data} = await instanceAxios.get('api/device/' + id);
        return data;
    },
};
