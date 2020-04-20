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
} from '../actions/types'


export const reducer = (state = {}, action) => {
    switch (action.type) {
        case API_START:
            return {
                isFetching: true
            }
        case LIST_ALL_EFFECTS:
            console.log('Action called!: ', action.payload)
            return {
                apiData: action.payload,
                isFetching: false
            }
        case GET_ALL_STRAINS:
            console.log('Action called!: ', action.payload)
            return {
                apiData: action.payload,
                isFetching: false
            }
        case API_FAILURE:
            return {
                isFetching: false
            }
        default:
            return state
    }
}

export default reducer