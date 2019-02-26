const express = require('express');

const Usuario = require('../models/usuario');
var cors = require('cors');
const app = express();


app.post('/login', cors(), (req, res) => {

    let body = req.body;

    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario incorrecto'
                }
            });
        }


        if (!(body.password === usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: ' Contraseña incorrectos'
                }
            });
        }

        res.json({
            ok: true,
            message: 'Correcto',
            usuario: usuarioDB,
        });


    });

});

module.exports = app;