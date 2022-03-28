'use strict'
const jwt = require('jsonwebtoken');
const Constant = require('../config/constant')
const db = require("../models");
const e = require('express');
const middileware = {};
const SECRET = process.env.SECRET;

middileware.checkAuthentication = (req, res, next) => {

    try {
        const { authorization } = req.headers;
        const decoded = jwt.verify(authorization, SECRET);
        req.user = decoded;

        next();
    } catch (error) {
        return res.json({
            code: Constant.INVALID_CODE,
            massage: Constant.INVALID_TOKEN,
            data: null
        })
    }
}

module.exports = middileware;