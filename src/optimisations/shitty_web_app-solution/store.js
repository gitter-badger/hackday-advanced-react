import {combineReducers, createStore} from 'redux'
import {reducersRegistry} from './reducersRegistry'

const identity = x => x

export const store = createStore(identity)

reducersRegistry.setChangeListener(reducers => {
  store.replaceReducer(combineReducers(reducers))
})

window.store = store
