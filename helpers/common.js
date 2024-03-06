// hold common functions shared by test
const axios = require('axios')
const base_url = "https://swapi.dev/api/"
async function getAll(path) {
    try {
        let res = await axios.get(`${base_url}${path}`)
        return res
    } catch (err) {
       return err
    }
}


async function getById(path, targetId) {
    try {
        let res = await axios.get(`${base_url}${path}/${targetId}`)
        return res
    } catch (err) {
        return err
    }
}

async function getSchema(path) {
    try {
        let res = await axios.get(`${base_url}${path}/schema/`)
        return res
    } catch (err) {
        return err
    }
}

// some endpoints are searchable by a param like name or model
async function getByParam(path, searchVal) {
    try {
        let res = await axios.get(`${base_url}${path}/?search=${searchVal}`)
        return res
    } catch (err) {
        return err
    }
}

// given data check if it follows the correct schema
// expand after tests are created
function validateBySchema(schema, data) {
    if (Object.keys(schema).length !== Object.keys(data).length) {
        throw new Error(`data received does not have the same amount of keys as schema`)
    }
    
    for (const key in data) {
        let val = data[key]
        if (schema[key] === "array" && !Array.isArray(val)) {
            throw new Error(`${key} value ( ${val} ) does not match schema type ${schema[key]} `)
        }
        if (schema[key] !== typeof val && schema[key] !== "array") {
            throw new Error(`${key} value ( ${val} ) does not match schema type ${schema[key]} `)
        }
    }
    return true
}

function validateAllBySchema(schema, dataArr) {
    return dataArr.every( (d) => validateBySchema(schema, d))
}


module.exports = {
    getAll,
    getById,
    getSchema,
    getByParam,
    validateBySchema,
    validateAllBySchema,
    base_url
}