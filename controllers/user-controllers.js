require('dotenv').config()
const { User } = require('../models')
const { ToDos } = require('../models')
const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRETKEY_JWT

const register = async (req, res) => {
    const code = req.body.code

    const checkUser = await User.findOne({ where: { code: code }})
    if (checkUser) {
        return res.status(400).json('Code sudah digunakan')
    }

    try {
        if (code.length !== 4) {
            return res.status(400).json('Code harus 4 angka')
        }
        await User.create({ code: code })

        return res.status(200).json('User berhasil ditambahkan.')
    } catch (err) {
        res.status(500).send(err)
    }
}

const login = async (req, res) => {
    try {
        const code = req.body.code

        const user = await User.findOne({ where: { code: code } })
        if (!user) {
            return res.status(400).json({
                message: 'User tidak ditemukan.'
            })
        }

        const accessToken = jwt.sign({
            id: user.id,
            code: user.code
        }, secretKey, {
            expiresIn: '1d'
        })

        return res.status(200).json({
            id: user.id,
            code: user.code,
            accessToken: accessToken
        })
    } catch (err) {
        return res.status(500).send(err)
    }
}

const authorization = (req, res) => {
    const currentUser = req.user

    return res.json({
        id: currentUser.id,
        code: currentUser.code
    })
}

const show = async (req, res) => {
    try {
        let result = await User.findAll({
            include: [{
                model: ToDos,
                as: 'todos'
            }]
        })
        return res.status(200).send(result)
    } catch (err) {
        return res.status(500).send(err)
    }
}

// const logout = async (req, res) => {
//     try {

//     } catch (err) {
//         res.send(err)
//     }
// }

module.exports = {
    register,
    login,
    authorization,
    show,
}