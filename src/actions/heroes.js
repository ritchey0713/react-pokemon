import moment from 'moment'

const API_URL = 'https://gateway.marvel.com/v1/public/characters?'
const API_KEY = process.env.REACT_APP_API_KEY
const REACT_PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY
const timeStamp = moment()
const URI = `${API_URL}ts=${timeStamp}&apikey=${API_KEY}&hash=${REACT_PRIVATE_KEY}`

const api = require('marvel-api');

const marvel = api.createClient({
  publicKey: API_KEY
, privateKey: REACT_PRIVATE_KEY
});

export const getAllHeroes = marvel.characters.findAll(5)
.then(resp => resp.json())
.then(chars => console.log(chars))
