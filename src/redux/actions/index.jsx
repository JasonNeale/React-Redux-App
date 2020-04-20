import axios from 'axios'

import {
    LIST_ALL_EFFECTS,
    LIST_ALL_FLAVORS,
    GET_ALL_STRAINS,
    SEARCH_STRAIN_BY_NAME,
    SEARCH_STRAIN_BY_RACE,
    SEARCH_STRAIN_BY_EFFECT,
    SEARCH_STRAIN_BY_FLAVOR,
    GET_STRAIN_DESCRIPTION,
    GET_STRAIN_EFFECTS,
    GET_STRAIN_FLAVORS, 
    API_START, 
    API_FAILURE
} from './types'

const apiKey = "sUkiUHU"
const baseURL = `http://strainapi.evanbusse.com/${apiKey}`


export const listAllEffects = () => dispatch => {
    dispatch({ type: API_START })
    axios.get(baseURL + "/searchdata/effects")
        .then(response => {
            dispatch({ type: LIST_ALL_EFFECTS, payload: response.data })
            console.log('axios response: ', response.data)
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const listAllFlavors = () => dispatch => {
    axios.get(baseURL + "/searchdata/flavors")
        .then(response => {
            dispatch({ type: LIST_ALL_FLAVORS, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const getAllStrains = () => dispatch => {
    axios.get(baseURL + "/strains/search/all")
        .then(response => {
            dispatch({ type: GET_ALL_STRAINS, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const searchByStrainName = (strainName) => dispatch => {
    axios.get(baseURL + "/strains/search/name/" + strainName)
        .then(response => {
            dispatch({ type: SEARCH_STRAIN_BY_NAME, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const searchByStrainRace = (strainRace) => dispatch => {
    // Available races: Sativa, Indica, and Hybrid)
    axios.get(baseURL + "/strains/search/RACE/" + strainRace)
        .then(response => {
            dispatch({ type: SEARCH_STRAIN_BY_RACE, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const searchByStrainEffect = (strainEffect) => dispatch => {
    axios.get(baseURL + "/strains/search/effect/" + strainEffect)
        .then(response => {
            dispatch({ type: SEARCH_STRAIN_BY_EFFECT, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const searchByStrainFlavor = (strainFlavor) => dispatch => {
    axios.get(baseURL + "/strains/search/favor/" + strainFlavor)
        .then(response => {
            dispatch({ type: SEARCH_STRAIN_BY_FLAVOR, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const getStrainDescription = (strainID) => dispatch => {
    axios.get(baseURL + "/strains/data/desc/" + strainID)
        .then(response => {
            dispatch({ type: GET_STRAIN_DESCRIPTION, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const getStrainEffects = (strainID) => dispatch => {
    axios.get(baseURL + "/strains/data/effects/" + strainID)
        .then(response => {
            dispatch({ type: GET_STRAIN_EFFECTS, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}

export const getStrainFlavors = (strainID) => dispatch => {
    axios.get(baseURL + "/strains/data/flavors/" + strainID)
        .then(response => {
            dispatch({ type: GET_STRAIN_FLAVORS, payload: response.data })
        }).catch(error => {
            dispatch({ type: API_FAILURE, payload: error.response })
        })
}