const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('../helpers/common.js')
const {Starship} = require('../helpers/schema.js')

describe("Starship",() => {
    test('it should get all Starships', () => {
        return getAll("starships")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(Starship, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a Starship by id', () => {
        return getById("starships", 9)
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Starship, response.data)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should not get a Starship when given an invalid id', () => {
        return getById("starships", "stwrs123")
            .then((response) => {
                expect(response.response.status).toBe(404)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    test('it should get a Starship by name', () => {
        return getByParam("starships", "Death Star")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Starship, response.data.results)).toBeTruthy()
                expect(response.data.results[0].crew).toBe("342,953")
                expect(response.data.results[0].hyperdrive_rating).toBe("4.0")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid name', () => {
        return getByParam("starships", "titanic")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a Starship by model', () => {
        return getByParam("starships", "DS-1 Orbital Battle Station")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Starship, response.data.results)).toBeTruthy()
                expect(response.data.results[0].crew).toBe("342,953")
                expect(response.data.results[0].hyperdrive_rating).toBe("4.0")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid model', () => {
        return getByParam("starships", "lego")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get Starship schema', () => {
        return getSchema("starships")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Starship, response.data)).toBeTrue()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
})