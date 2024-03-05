const { getAll, getById, getByParam, getSchema, validateBySchema} = require('./common.js')
const {Planet} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("planet",() => {
    test('it should get all people', () => {
        let [err,res] = getAll("planets");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
    test('it should get a person by id', () => {
        let [err,res] = getById("planets", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
    test('it should not get a person when given an invalid id', () => {
        let [err,res] = getById("planets", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a person by params', () => {
        let [err,res] = getByParams("planets", "TODO add valid anem");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
})
