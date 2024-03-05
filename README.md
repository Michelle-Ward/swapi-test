# swapi-test

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