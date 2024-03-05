const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('./common.js')
const {Starship} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("Starship",() => {
    test('it should get all Starship', () => {
        let [err,res] = getAll("starships");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateAllBySchema(Starship, res.response.data)).toBeTrue()
    })
    test('it should get a Starship by id', () => {
        let [err,res] = getById("starships", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
    test('it should not get a Starship when given an invalid id', () => {
        let [err,res] = getById("starships", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a Starship by params', () => {
        let [err,res] = getByParam("starships", "TODO add valid anem");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
    test('it should get Starship schema', () => {
        let [err,res] = getSchema("starships");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Starship, res.response.data)).toBeTrue()
    })
})
