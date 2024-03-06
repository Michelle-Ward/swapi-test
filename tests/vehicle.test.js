const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('../helpers/common.js')
const {Vehicle} = require('../helpers/schema.js')

describe("Vehicle",() => {
    test('it should get all Vehicles', () => {
        return getAll("vehicles")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(Vehicle, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a Vehicle by id', () => {
        return getById("vehicles", 4)
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Vehicle, response.data)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should not get a Vehicle when given an invalid id', () => {
        return getById("vehicles", "stwrs123")
            .then((response) => {
                expect(response.response.status).toBe(404)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    test('it should get a vehicle by name', () => {
        return getByParam("vehicles", "Sand Crawler")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Vehicle, response.data.results)).toBeTruthy()
                expect(response.data.results[0].passengers).toBe("30")
                expect(response.data.results[0].cargo_capacity).toBe("50000")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid name', () => {
        return getByParam("vehicles", "vespa")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a vehicle by model', () => {
        return getByParam("vehicles", "Digger Crawler")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Vehicle, response.data.results)).toBeTruthy()
                expect(response.data.results[0].passengers).toBe("30")
                expect(response.data.results[0].cargo_capacity).toBe("50000")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid model', () => {
        return getByParam("vehicles", "gisele")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get Vehicle schema', () => {
        return getSchema("vehicles")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Vehicle, response.data)).toBeTrue()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
})
