import {createStore,combineReducers} from 'redux'

const initialState = {
    number : 0
}
const counterReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                number : state.number + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                number: state.number - 1
            }
        case 'INCREMENT10':
            return {
                ...state,
                number: state.number + action.payload
            }
        default:
             return state
    }
}

const nameReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_NAME':
            return state.concat(action.payload)
        default:
            return state
    }
}

const store = createStore(combineReducers(
    {
    number:counterReducer,
    names:nameReducer
    }
))
export default store

