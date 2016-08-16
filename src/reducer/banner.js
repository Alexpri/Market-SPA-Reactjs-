import { LOAD_BANNER, START, SUCCESS } from '../constants'
import { Record, Map, List } from 'immutable'
import { recordsFromArray } from './utils'

const Banner = Record({
    "id": null,
    "url": "",
    "title": "",
    "text": ""
})

const defaultBanner = recordsFromArray(Banner, [])

const defaultState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    entities: defaultBanner
})

export default (state = defaultState, action) => {

    const { type, data } = action

    switch (type) {
        case LOAD_BANNER + START:
            return state.set('loading', true)
        case LOAD_BANNER + SUCCESS:
            return state
                        .set('loading', false)
                        .set('loaded', true)
                        .update('entities', entities => entities.merge(recordsFromArray(Banner, data)))
    }

    return state
}