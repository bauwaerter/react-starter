import {createAction} from 'redux-actions'

export default function createActionAlt(...args) {
  const [type] = args
  const actionCreator = createAction(...args)
  actionCreator.type = type
  return actionCreator
}
