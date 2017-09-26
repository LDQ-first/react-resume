
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

export const chooseNavIndex = (index) => (dispatch) => {
    dispatch(chooseNav(index))
    /*switch(index) {
        case '0':
            
            break
    }*/
}




export const setTop = (index, top) => {
    return {
        type: SET_TOP,
        index,
        top
    }
}

export const setTopData = (index, top) => (dispatch) => {
     
     dispatch(setTop(index, top))
}

