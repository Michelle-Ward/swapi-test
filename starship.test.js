const { getAll, getById, getByParam, getSchema, validateBySchema} = require('./common.js')
const {Starship} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("Starship",() => {
    test('it should get all Starship', () => {
        let [err,res] = getAll("Starships");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
    test('it should get a Starship by id', () => {
        let [err,res] = getById("Starships", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
    test('it should not get a Starship when given an invalid id', () => {
        let [err,res] = getById("Starships", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a Starship by params', () => {
        let [err,res] = getByParam("Starships", "TODO add valid anem");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
    test('it should get Starship schema', () => {
        let [err,res] = getSchema("Starships");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
})
