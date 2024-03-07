const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema, generateInvalidString} = require('../helpers/common.js')
const {Planet} = require('../helpers/schema.js')

describe("Planet",() => {
    test('it should get all Planets', () => {
        return getAll("planets")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(Planet, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a Planet by id', () => {
        return getById("planets", 1)
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Planet, response.data)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should not get a Planet when given an invalid id', () => {
        return getById("planets", "stwrs123")
            .then((response) => {
                expect(response.response.status).toBe(404)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    test('it should get a Planet by name', () => {
        return getByParam("planets", "Tatooine")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Planet, response.data.results)).toBeTruthy()
                expect(response.data.results[0].orbital_period).toBe("304")
                expect(response.data.results[0].climate).toBe("arid")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid name', () => {
        return getByParam("planets", generateInvalidString())
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get Planet schema', () => {
        return getSchema("planets")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Planet, response.data)).toBeTrue()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
})