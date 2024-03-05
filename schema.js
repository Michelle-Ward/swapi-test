
// reason to hard code is to have a seperate source of truth that isn't dependent on the api I am testing.
// possible scenarios is what if a change is added that alters the schema in a way that the other endpoints would start failing
// this way only the getSchema test would have a validation failure which would be quicker to diagnose than having all endpoints fail
const People = {
    name: "string",
    birth_year: "string",
    eye_color: "string",
    gender: "string", // enum Male, Female, unkown "n/a"
    hair_color: "string", 
    height: "string", // TEST: is it in centimeters?
    mass: "string", // TEST: is it formatted in kilograms
    skin_color: "string",
    homeworld: "string", //TEST: is this a valid planet resource
    films: "array", //Test: is this a valid array of film urls
    species: "array", //""
    starships: "array", //""
    vehicles: "array", //""
    url: "string", // TEST does this match the url we used?
    created: "string", //TEST valid date?
    edited: "string", //""
}

const Film = {
    title: "string", 
    episode_id: "number", // integer TEST that it is valid integer
    opening_crawl: "string",
    director: "string",
    producer: "string",
    release_date: "string", // test it is a valid date
    species: "array", // test valid urls
    starships: "array",
    vehicles: "array",
    characters: "array",
    planets: "array",
    url: "string",
    created: "string",
    edited: "string"
}

const Starship = {
    name: "string", 
    model: "string",
    starship_class: "string",
    manufacturer: "string",
    cost_in_credits: "string",
    length: "string",
    crew: "string",
    passengers: "string",
    max_atmosphering_speed: "string",
    hyperdrive_rating: "string",
    MGLT: "string",
    cargo_capacity: "string",
    consumables: "string",
    films: "array",
    pilots: "array",
    url: "string",
    created: "string",
    edited: "string"
}

const Vehicle = {
    name: "string",
    model: "string",
    vehicle_class: "string",
    manufacturer: "string",
    length: "string",
    cost_in_credits: "string",
    crew: "string",
    passengers: "string",
    max_atmosphering_speed: "string",
    cargo_capacity: "string",
    consumables: "string",
    films: "array",
    pilots: "array",
    url: "string",
    created: "string",
    edited: "string"
}

const Species = {
    name: "string",
    classification: "string",
    designation: "string",
    average_height: "string",
    average_lifespan: "string",
    eye_colors: "string", // TEST is it comma seperated  or none
    hair_colors: "string", 
    skin_colors: "string",
    language: "string",
    homeworld: "string",
    people: "array",
    films: "array",
    url: "string",
    created: "string",
    edited: "string",
}


const Planet = {
    name: "string",
    diameter: "string",
    rotation_period: "string",
    orbital_period: "string",
    gravity: "string",
    population: "string",
    climate: "string",
    terrain: "string",
    surface_water: "string",
    residents: "array",
    films: "array",
    url: "string",
    created: "string",
    edited: "string,"
}