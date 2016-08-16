import { LOAD_BANNER, START, SUCCESS, FAIL } from '../constants'

export function loadBanner() {
    return {
        type: LOAD_BANNER,
        callAPI: '/api/banner'
    }
}