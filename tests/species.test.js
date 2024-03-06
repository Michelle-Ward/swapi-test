const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('../helpers/common.js')
const {Species} = require('../helpers/schema.js')

describe("Species",() => {
    // This test fails the schema validation due to homeworld value not being a string. The documentation states in other cases the value would be "none" or "n/a"
    // I opted to not accomodate this null in the validation function and to allow it to assert an error in this case
    test('it should get all Species', () => {
        return getAll("species")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(Species, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get a Species by id', () => {
        return getById("species", 1)
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Species, response.data)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should not get a Species when given an invalid id', () => {
        return getById("species", "stwrs123")
            .then((response) => {
                expect(response.response.status).toBe(404)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    test('it should get a Species by name', () => {
        return getByParam("species", "Wookie")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Species, response.data.results)).toBeTruthy()
                expect(response.data.results[0].average_lifespan).toBe("400")
                expect(response.data.results[0].designation).toBe("sentient")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid name', () => {
        return getByParam("species", "shryriiwook")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should get Species schema', () => {
        return getSchema("species")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Species, response.data)).toBeTrue()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
})
