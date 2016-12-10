import {handleActions} from 'redux-actions'
import * as actions from './actions'

const INITIAL_STATE = {
  count: 0,
}

/** Combination of reducer subsets as a single reducer for Redux */
export default handleActions({
  [actions.decrementCount.type]: decrementCount,
  [actions.incrementCount.type]: incrementCount,
}, INITIAL_STATE)

function decrementCount(state) {
  return {...state, count: state.count - 1}
}

function incrementCount(state) {
  return {...state, count: state.count + 1}
}
