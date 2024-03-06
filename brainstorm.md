## Brainstorm

How is the api set up?


https://swapi.dev/api/
root(api) -> films
             people
             planets
             species
             starships
             vehicles

all endpoints have a three endpoints in common
get all (/)
get by id (/:id/)
get by schema (/schema/)


test 

sanity check
    - does base url /api/ not return a 404
        - if 404 none of the other endpoints would work
Get all 
    - given the path
        - it respond with 200 code to a get request
        - it should contain a json response
        - it should have data that matches the schema of the given path
        - it should respond with 404 if given any other method?? would be changed once others are added
Get by Id
    - given the path and the id
        - it should respond with 200 code to a get request
        - it should contain a json response
        - it should have a single data point that matches the schema of the given path
        - it should respond with 404 if id given is not valid

get by schema 
    - it should respond with 200 code to a get request
    - it should contain a json response
    - it should match the schema of the given path

how do I compare the schema and data?
    - api gives schema
    - documentation available to hard codes
    - what happens if api schema is wrong? that means test would fail anyway
    - pros of hardcoding is you can see it in the test, interact with it, and create generators off of it which can be helpful when PUT and POST endpoints are added in the future

framework Jest
    -- short config time considering time constraint of take home
language
    -- using js but would use typscript for the benefits of types and structs


### steps
    - create schemas.ts 
    - create the common function
    - create surface level validation function
    - create common test cases
    - add testing command
    - verify common fetch can connect


    ## source api may have issue with schema endpoint
        when queried directly 
            

GET /api/films/schema/

HTTP 404 NOT FOUND
Content-Type: application/json
Vary: Accept
Allow: GET, HEAD, OPTIONS

{
    "detail": "Not found"
}
