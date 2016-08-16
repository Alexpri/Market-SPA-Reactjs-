import { LOAD_SLIDERINFO, START, SUCCESS } from '../constants'
import { Record, Map, List } from 'immutable'
import { recordsFromArray } from './utils'

const sliderInfo = Record({
    "id": "",
    "url": "",
    "title": "",
    "text": ""
})

const defaultSliderInfo = recordsFromArray(sliderInfo, [])

const defaultSliderState = new Map({
    loading: false,
    loaded: false,
    errors: new List([]),
    entities: defaultSliderInfo
})

export default (state = defaultSliderState, action) => {

    const { type, data } = action

    console.log(type, data)

    switch (type) {
        case LOAD_SLIDERINFO + START:
            return state.set('loading', true)

        case LOAD_SLIDERINFO + SUCCESS:
            return (
                state
                        .set('loading', false)
                        .set('loaded', true)
                        .update('entities', entities => entities.merge(recordsFromArray(sliderInfo, data)))
            )
    }

    return state
}