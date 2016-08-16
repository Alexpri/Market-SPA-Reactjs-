import { createStore, applyMiddleware, compose } from 'redux'
import api from '../middlewares/api'
import reducer from '../reducer'

const enhancer = compose(
    applyMiddleware(api),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store