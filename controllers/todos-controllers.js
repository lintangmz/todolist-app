const { ToDos } = require('../models')
const { User } = require('../models')

const add = async (req, res) => {
    try {
        let userId = await User.findOne({ where: { id: req.body.userId } })
        if (!userId) {
            return res.status(400).json('User tidak ditemukan.')
        }

        let result;
        result = await ToDos.create({
            userId: req.body.userId,
            task: req.body.task
        })

        return res.status(200).json({
            message: 'Task berhasil ditambahkan',
            result: result
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const show = async (req, res) => {
    try {
        let result = await ToDos.findAll({
            include: [{
                model: User,
                as: 'users'
            }]
        })

        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err)
    }
}

const showByUser = async (req, res) => {
    try {
        let userId = await User.findByPk(req.params.id, {
            include: [{
                model: ToDos,
                as: 'todos'
            }]
        })
        if (!userId) {
            return res.status(400).json({
                message: 'User tidak ditemukan!'
            })
        }

        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err)
    }
}

const update = async (req, res) => {
    try {
        let todos = await ToDos.findByPk(req.params.id)
        if (!todos) {
            return res.status(400).send({
                message: 'Task tidak ditemukan.'
            })
        }

        await todos.update({
            task: req.body.task
        })
        return res.status(200).send({
            message: 'Task berhasil diperbarui.'
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const deleteById = async (req, res) => {
    try {
        let todos = await ToDos.findByPk(req.params.id)
        if (!todos) {
            return res.status(400).send({
                message: 'Task tidak ditemukan.'
            })
        }

        await todos.destroy()
        return res.status(200).send({
            message: 'Task berhasil dihapus.'
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = {
    add,
    show,
    showByUser,
    update,
    deleteById
}