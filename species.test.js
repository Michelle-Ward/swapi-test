const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('./common.js')
const {Species} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("Species",() => {
    test('it should get all species', () => {
        let [err,res] = getAll("species");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateAllBySchema(Species, res.response.data)).toBeTrue()
    })
    test('it should get a Species by id', () => {
        let [err,res] = getById("species", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Species, res.response.data)).toBeTrue()
    })
    test('it should not get a Species when given an invalid id', () => {
        let [err,res] = getById("species", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a Species by params', () => {
        let [err,res] = getByParam("species", "TODO add valid anem");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Species, res.response.data)).toBeTrue()
    })
    test('it should get Species schema', () => {
        let [err,res] = getSchema("species");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Species, res.response.data)).toBeTrue()
    })
})
