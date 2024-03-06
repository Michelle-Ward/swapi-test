const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('../helpers/common.js')
const {People} = require('../helpers/schema.js')


describe("People",() => {
    test('it should get all People', () => {
        return getAll("people")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(People, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a People by id', () => {
        return getById("people", 1)
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(People, response.data)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should not get a People when given an invalid id', () => {
        return getById("people", "stwrs123")
            .then((response) => {
                expect(response.response.status).toBe(404)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    test('it should get a People by name', () => {
        return getByParam("people", "Luke Skywalker")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(People, response.data.results)).toBeTruthy()
                expect(response.data.results[0].skin_color).toBe("fair")
                expect(response.data.results[0].gender).toBe("male")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid name', () => {
        return getByParam("people", "Larry Skywalker")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get People schema', () => {
        return getSchema("people")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(People, response.data)).toBeTrue()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
})
