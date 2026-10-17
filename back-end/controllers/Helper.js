const { Helper } = require('../models');

exports.findAllHelper = async (req, res) => {
    try {
        const data = await Helper.findAll({
            order: [
                ['fullName', 'ASC'],
            ]
        })
        res.json({ helpers: data })
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.findHelperById = async (req, res) => {
    try {
        const data = await Helper.findByPk(req.params.id
        )
        res.json(data)
    } catch (err) {
        res.json({ message: err.message})
    }
}

exports.createHelper = async (req, res) => {
    try {
        var data = await Helper.create(req.body)
        res.json({ 'message': 'Helper Created successfully', data:data})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.updateHelper = async (req, res) => {
    try {
        await Helper.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ 'message': 'Helper Updated successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteHelper = async (req, res) => {
    try {
        await Helper.destroy({
            where: { id: req.params.id}
        })
        res.json({ 'message': 'Helper Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}

exports.deleteAllHelper = async (req, res) => {
    try {
        await Helper.destroy({
            truncate: true
        })
        res.json({ 'message': 'Helper All Deleted successfully'})
    } catch (err) {
        res.json({ message: err.message })
    }
}
