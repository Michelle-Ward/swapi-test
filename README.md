# swapi-test

## Setup and Running
This repo utilizes node 20.11.1. More detailed instructions can be foundfrom this site to install: https://heynode.com/tutorial/install-nodejs-locally-nvm/ 

```
nvm install  --lts
nvm use 20.11.1
```

To install yarn:

```
corepack enable
```

To install packages:
```
yarn install 
```

To run tests:
```
yarn jest
```

## Repo organization
I have seperated each endpoint into their own test file within the `tests/`. I made this choice with the idea that these endpoints would be expanded which could also mean that each endpoint might diverge in interactions and uses. `helpers/` contains the schema file which is created from the api documentation. It also contains the common file which has shared functions to request and validate data. 

## Other Ideas and Next Steps
As the API as-is has a lot of overlap and similarities another implementation could be to have a list of the paths as strings. I could iterate over the paths and and call the describe, tests, and expects in the loop. Where there is a reference to a single path (ex. Describes("Planets"...)) I would replace with a variable. This would be contained within a single file.
I would also see if I could write a test file generator. Since there is a lot of repeated code, I could utilize the single file and loop implementation but have it be a script that would produce a test file with the given arguments in the repo. Any shared test cases could be added to this. I have done file generation scripts with Python. With more time than the take home has, I would try to recreate that in typescript.
 