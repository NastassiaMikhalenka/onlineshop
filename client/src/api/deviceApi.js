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

    async createType(type) {
        const {data} = await instanceAxios.post('api/type', type);
        return data;
    },

    async deleteType(id) {
        const {data} = await instanceAxios.delete(`api/type/${id}`);
        return data;
    },

    async createBrand(brand) {
        const {data} = await instanceAxios.post('api/brand', brand);
        return data;
    },

    async deleteBrand(id) {
        const {data} = await instanceAxios.delete(`api/brand/${id}`);
        return data;
    },

    async createDevice(dataDevice) {
        const {data} = await instanceAxios.post('api/device', dataDevice);
        return data;
    },

    async deleteDevice(id) {
        const {data} = await instanceAxios.delete(`api/device/${id}`);
        return data;
    },
};
