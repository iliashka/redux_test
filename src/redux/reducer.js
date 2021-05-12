import {combineReducers} from "redux";
import {CREATE_PERSON} from "./constants";

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

export const rootReducer = combineReducers({
    namesReducer
})
