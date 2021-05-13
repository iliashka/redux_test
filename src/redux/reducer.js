import {combineReducers} from "redux";
import {CREATE_PERSON, REGISTER_SUCCESS, REGISTER_FAILURE} from "./constants";

const initialNamesState = {
    persons: []
}
const namesReducer = (state = initialNamesState, action) => {
    switch (action.type) {
        case CREATE_PERSON:
            let persons= state.persons
            persons.push(action.payload)
            return {...state, persons: persons}
        default: return state
    }
}

const initialRegisterState = {
    user: {},
    error: ''
}

const registerReducer = (state = initialRegisterState, action) => {
    console.log(action.type)
   switch (action.type) {
       case REGISTER_SUCCESS:
           return {...state, user: action.payload, error: null}
       case REGISTER_FAILURE:
           return {...state, user: null, error: action.payload}
       default: return state
   }
}

export const rootReducer = combineReducers({
    namesReducer,
    registerReducer
})

