const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('./common.js')
const {Starship} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("Vehicle",() => {
    test('it should get all Vehicle', () => {
        console.log(getAll("vehicles"))
        let [err,res] = getAll("vehicles");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        // TODO: add forEach
        expect(validateAllBySchema(Vehicle, res.response.data)).toBeTrue()
    })
    test('it should get a Vehicle by id', () => {
        let [err,res] = getById("vehicles", 1);
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Vehicle, res.response.data)).toBeTrue()
    })
    test('it should not get a Vehicle when given an invalid id', () => {
        let [err,res] = getById("vehicles", "stwrs123");
        expect(err).toBeTruthy()
        expect(res.response.status).toBe(404)
    })
    test('it should get a Vehicle by params', () => {
        let [err,res] = getByParam("vehicles", "TODO add valid anem");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Vehicle, res.response.data)).toBeTrue()
    })
    test('it should get Vehicle schema', () => {
        let [err,res] = getSchema("vehicles");
        expect(err).toBe(null)
        expect(res.response.status).toBe(200)
        expect(validateBySchema(Vehicle, res.response.data)).toBeTrue()
    })
})
