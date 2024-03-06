const axios = require('axios')
const {base_url} = require('../helpers/common.js')

describe("health - api",() => {
    test('it should respond to a request to the base url', () => {
        return axios.get(base_url)
            .then((response) => {
                expect(response.status).toBe(200)
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