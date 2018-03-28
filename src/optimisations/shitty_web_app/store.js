import {combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
})

export const store = createStore(rootReducer)
