import { createSelector } from 'reselect'
import {selectGolbal} from './index'


export const homeSelector = createSelector(
    selectGolbal,
    appState => appState.get('home')
)

export const scrollSelector = createSelector(
    homeSelector,
    homeState => {
        if(!homeState) return
        return homeState.get('scroll')
    }
)

export const activeIndexSelector = createSelector(
    homeSelector,
    homeState => {
        if(!homeState) return
        return homeState.get('activeIndex')
    }
)





