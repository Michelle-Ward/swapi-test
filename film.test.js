const { getAll, getById, getByParam, getSchema, validateBySchema} = require('./common.js')
const {Film} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("film",() => {
    test('it should get all films', () => {
        let [err,res] = getAll("films");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateBySchema(Film, res.response.data)).toBeTrue()
    })
    test('it should get a film by id', () => {
        let [err,res] = getById("films", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Film, res.response.data)).toBeTrue()
    })
    test('it should not get a film when given an invalid id', () => {
        let [err,res] = getById("films", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a film by params', () => {
        let [err,res] = getByParam("films", "TODO add valid anem");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Film, res.response.data)).toBeTrue()
    })
    test('it should get film schema', () => {
        let [err,res] = getSchema("films");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Film, res.response.data)).toBeTrue()
    })
})
