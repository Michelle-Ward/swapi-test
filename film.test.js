const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('./common.js')
const {Film} = require('./schema.js')

// seperated each endpoint into their own test files. It's possible to reduce these functions to be all in one file and run them through a loop of all the possible paths but I made the choice
// to seperate them for future additions and help in debugging since jest will display each describe block as a suite.
describe("Film",() => {
    // latency of the endpoint
    test('it should get all Films', () => {
        return getAll("films")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(Film, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    }, 100000)
    test('it should get a Film by id', () => {
        // if bounds of ids is known get by id should be replaced a randomId generator within those known bounds
        return getById("films", 1)
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Film, response.data)).toBeTruthy()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should not get a Film when given an invalid id', () => {
        return getById("films", "stwrs123")
            .then((response) => {
                expect(response.response.status).toBe(404)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    test('it should get a Film by title', () => {
        return getByParam("films", "A New Hope")
            .then((response) => {
                expect(response.status).toBe(200)
                console.log(response.data)
                expect(response.data.count).toBe(1)
                expect(validateAllBySchema(Film, response.data.results)).toBeTruthy()
                expect(response.data.results[0].episode_id).toBe(4)
                expect(response.data.results[0].director).toBe("George Lucas")
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
    test('it should return an empty result when given an invalid title', () => {
        return getByParam("films", "Star Trek")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(response.data.count).toBe(0)
                expect(response.data.results.length).toBe(0)
            })
            .catch((err) => {
                console.log(err)
            })
    })
    // test('it should get Film schema', () => {
    //     return getSchema("films")
    //         .then((response) => {
    //             console.log(response)
    //             expect(response.status).toBe(200)
    //             expect(validateBySchema(Film, response.data)).toBeTrue()
    //         })
    //         .catch((err) => {
    //             expect(err).toBe(null)
    //         })
    // })
})
