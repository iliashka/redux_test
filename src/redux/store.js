import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from 'redux-observable'
import { rootReducer } from "./reducer";
import logger from "redux-logger";
import {REGISTER_REQUEST} from "./constants";
import axios from 'axios'
import qs from 'qs'
import { mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";


const authEpic = action$ => {
    console.log('epic')
    return action$.pipe(
        ofType(REGISTER_REQUEST),
        mergeMap(action => {
            axios.post('api/singUp', qs.stringify(action.payload))
                .then(response => {
                    store.dispatch({type: 'REGISTER_SUCCESS', payload: response.data})
                })
                .catch(error => {
                    store.dispatch({type: 'REGISTER_FAILURE', payload: error})
                })
        }))
}

const epicMiddleware = createEpicMiddleware()
epicMiddleware.run(authEpic)

export const store = createStore(rootReducer, applyMiddleware(logger, epicMiddleware))