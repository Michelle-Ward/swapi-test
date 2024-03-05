// hold common functions shared by test
const axios = require('axios')

async function getAll(path) {
    try {
        let res = await axios.get(`https://swapi.dev/api/${path}/`)
        return [null, res]
    } catch (err) {
        return [err]
    }
}


async function getById(path, targetId) {
    try {
        let res = await axios.get(`https://swapi.dev/api/${path}/`, {params: {id: targetId}})
        return [null, res]
    } catch (err) {
        return [err]
    }
}

async function getSchema(path) {
    try {
        let res = await axios.get(`https://swapi.dev/api/${path}/schema/`)
        return [null, res]
    } catch (err) {
        return [err]
    }
}

// some endpoints are searchable by a param like name or model
async function getByParam(path, searchVal) {
    try {
        let res = await axios.get(`https://swapi.dev/api/${path}/?search=${searchVal}`)
        return [null, res]
    } catch (err) {
        return [err]
    }
}

// given data check if it follows the correct schema
// expand after tests are created
function validateBySchema(schema, data) {
    if (schema.keys().length !== data.keys().length) {
        return false
    }
    
    for (let [key, val] in data) {
        if (schema[key] === "array" && !Array.isArray(val)) {
            return false
        }
        if (schema[key] !== typeof val) {
            return false
        }
    }
    return true
}

function validateAllBySchema(schema, dataArr) {
    dataArr.every( (d) => validateBySchema(schema, d))
}


module.exports = {
    getAll,
    getById,
    getSchema,
    getByParam,
    validateBySchema,
    validateAllBySchema
}