import * as types from '../action-types'
import { AnyAction } from 'redux'

export interface IBlogState {
    menuState?: boolean
}

let menuState:IBlogState = {
    menuState: false
}

export default function (state:IBlogState = menuState,action:AnyAction) {
    switch (action.type){
        case types.SHOW_MAIN_MENU:
            return {  menuState: !state.menuState }
        default:
            return state;
    }
}
