const { getAll, getById, getByParam, getSchema, validateBySchema, validateAllBySchema} = require('../helpers/common.js')
const {Film} = require('../helpers/schema.js')

describe("Film",() => {
    test('it should get all Films', () => {
        return getAll("films")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateAllBySchema(Film, response.data.results)).toBeTruthy()
            })
            .catch((err) => {
                // Axios api call and above expects should not error out
                expect(err).toBe(null)
            })
    })
    test('it should get a Film by id', () => {
        // if bounds of ids in db is known I would replace the hardcoded integer with a randomGenerator within the id bounds
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
                // API will return 404 which will register as an error in axios. console.log since we want an error in this case
                console.log(err)
            })
    })
    test('it should get a Film by title', () => {
        return getByParam("films", "A New Hope")
            .then((response) => {
                expect(response.status).toBe(200)
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
                expect(err).toBe(null)
            })
    })
    // Expecting this test to fail. When trying the API's own website and with postman the schema endpoint responded 404.
    test('it should get Film schema', () => {
        return getSchema("films")
            .then((response) => {
                expect(response.status).toBe(200)
                expect(validateBySchema(Film, response.data)).toBeTrue()
            })
            .catch((err) => {
                expect(err).toBe(null)
            })
    })
})
