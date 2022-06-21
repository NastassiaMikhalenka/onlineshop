const {Type} = require("../models/models");
const ApiError = require("../errors/apiError");

class TypeController {
    async create(req, res) {
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.json(types);
    }

    async getOne(req, res) {
        const {id} = req.params
        const type = await Type.findOne(
            {
                where: {id}
            }
        )
        return res.json(type)
    }

    async update(req, res) {
        const {id, name} = req.body
        await Type.update(
            {name},
            {where: {id}}
        )
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const {id} = req.params
        await Type.destroy(
            {
                where: {id}
            }
        )
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController();
