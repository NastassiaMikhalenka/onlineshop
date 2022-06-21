const {Brand} = require("../models/models");
const ApiError = require("../errors/apiError");

class BrandController {

    async create(req, res, next) {
        try {
            if (!req.body.name) {
                // throw new Error("Can't create brand without a name")
                return next(ApiError.badRequest({message: "Can't create brand without a name"}));
            }
            const {name} = req.body
            const brand = await Brand.create({name})
            return res.json(brand);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res, next) {
        try {
            const brands = await Brand.findAll();
            return res.json(brands);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async update(req, res, next) {
        try {
            if (!req.params.id) {
                throw new Error('Wrong id!');
            }

            const brand = await Brand.findByPk(req.params.id);
            if (!brand) {
                throw new Error('Brand does not found!');
            }

            const name = req.body.name || brand.name;
            await brand.update({ name });
            return res.json(brand);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async delete(req, res) {
        const {id} = req.params
        await Brand.destroy({where: {id}})
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController();
