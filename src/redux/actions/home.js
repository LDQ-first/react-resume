
import {
    SET_TOP,
    CHOOSE_NAV
} from '../const/const.js'


export const chooseNav = (index) => {
    return {
        type: CHOOSE_NAV,
        index
    }
}

export const chooseNavIndex = (index) => async (dispatch) => {
    await dispatch(chooseNav(index))
}




export const setTop = (index, top) => {
    return {
        type: SET_TOP,
        index,
        top
    }
}

export const setTopData = (index, top) => async (dispatch) => {
     await dispatch(setTop(index, top))
}

