import { LOAD_SLIDERINFO, START, SUCCESS, FAIL } from '../constants'

export function loadSliderInfo() {
    return {
        type: LOAD_SLIDERINFO,
        callAPI: '/api/sliderinfo'
    }
}