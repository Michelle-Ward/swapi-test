const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('./common.js')
const {Planet} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("planet",() => {
    test('it should get all planets', () => {
        let [err,res] = getAll("planets");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateAllBySchema(Planet, res.response.data)).toBeTrue()
    })
    test('it should get a planet by id', () => {
        let [err,res] = getById("planets", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
    test('it should not get a planet when given an invalid id', () => {
        let [err,res] = getById("planets", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a planet by params', () => {
        let [err,res] = getByParam("planets", "TODO add valid name");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
    test('it should get planet schema', () => {
        let [err,res] = getSchema("planets");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Planet, res.response.data)).toBeTrue()
    })
})
