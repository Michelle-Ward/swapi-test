const { getAll, getById, getByParam, getSchema, validateBySchema} = require('./common.js')
const {People} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("people",() => {
    test('it should get all people', () => {
        let [err,res] = getAll("people");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateBySchema(People, res.response.data)).toBeTrue()
    })
    test('it should get a person by id', () => {
        let [err,res] = getById("people", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(People, res.response.data)).toBeTrue()
    })
    test('it should not get a person when given an invalid id', () => {
        let [err,res] = getById("people", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a person by param', () => {
        let [err,res] = getByParam("people", "TODO add a valid name");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(People, res.response.data)).toBeTrue()
    })
    test('it should get people schema', () => {
        let [err,res] = getSchema("people");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
})
