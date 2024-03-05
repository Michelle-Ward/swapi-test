// hold common functions shared by test
const axios = require('axios')

function getAll(path) {
    // given path make api request
    axios.get(`https://swapi.dev/api/${path}/`)
    .then( (res) => {
        return [null, res]
    })
    .catch( (err) => {
        return err
    })
}

function getById(path, targetId) {
    axios.get(`https://swapi.dev/api/${path}/`, {params: {id: targetId}})
    .then( (res) => {
        return [null, res]
    })
    .catch( (err) => {
        return err
    })
}

function getSchema(path) {
    axios.get(`https://swapi.dev/api/${path}/schema/`)
    .then( (res) => {
        return [null, res]
    })
    .catch( (err) => {
        return err
    })
}

// some endpoints are searchable by a param like name or model
function getByParam(path, searchVal) {
    axios.get(`https://swapi.dev/api/${path}/?search=${searchVal}`)
    .then( (res) => {
        return [null, res]
    })
    .catch( (err) => {
        return err
    })
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


module.exports = {
    getAll,
    getById,
    getSchema,
    getByParam,
    validateBySchema
}