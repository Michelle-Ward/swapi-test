const axios = require('axios')
const {base_url} = require('../helpers/common.js')

describe("health - api",() => {
    // Checks that base_url is correct since all other test will fail with 404 if it isn't correct
    test('it should respond to a request to the base url', () => {
        return axios.get(base_url)
            .then((response) => {
                expect(response.status).toBe(200)
                // we can keep a list of the endpoints we would expect from the base_url and write a single expect in a loop as endpoints are added
                expect(response.data.hasOwnProperty("people")).toBeTruthy()
                expect(response.data.hasOwnProperty("planets")).toBeTruthy()
                expect(response.data.hasOwnProperty("films")).toBeTruthy()
                expect(response.data.hasOwnProperty("species")).toBeTruthy()
                expect(response.data.hasOwnProperty("vehicles")).toBeTruthy()
                expect(response.data.hasOwnProperty("starships")).toBeTruthy()
            })
            .catch((err) => {
                throw new Error(err)
            })
    })

})