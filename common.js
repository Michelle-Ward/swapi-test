// hold common functions shared by test
const axios = require('axios')

function getAll(path) {
    // given path make api request
    axios.get(path)
    .then( (res) => {
        return (null, res)
    })
    .catch( (err) => {
        return err
    })
}

function getById(path, targetId) {
    axios.get(path, {params: {id: targetId}})
    .then( (res) => {
        return (null, res)
    })
    .catch( (err) => {
        return err
    })
}

function getSchema(path) {
    axios.get(`${path}/schema/`)
    .then( (res) => {
        return (null, res)
    })
    .catch( (err) => {
        return err
    })
}