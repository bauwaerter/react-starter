import {connect} from 'react-redux'
import Root from './template'
import {decrementCount, incrementCount} from '../../actions'

// Transparently pass through component from template
export default connect(props, actions)(Root)

export function props({count}) {
  console.log(count)
  return {count}
}

export function actions(dispatch) {
  return {
    actions: {
      decrementCount: () => dispatch(decrementCount()),
      incrementCount: () => dispatch(incrementCount()),
    },
  }
}
