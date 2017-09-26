import {
    SET_TOP,
    CHOOSE_NAV
} from '../const/const'
import { fromJS } from 'immutable'



const initSate = fromJS({
    scroll: [],
    activeNavIndex: 0
})

export default (state = initSate, action) => {
    console.log(action)
    switch(action.type) {
        case SET_TOP:
            return state.setIn(['scroll', action.index], action.top)
        case CHOOSE_NAV:
            return state.set('activeNavIndex', action.index)
        default:
            return state
    }
}