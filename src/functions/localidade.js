const { json } = require('body-parser')
const fetch = require('node-fetch')


module.exports = async function Localidade(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const locjson = await response.json()

    return locjson
}