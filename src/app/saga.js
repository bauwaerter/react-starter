import {call, fork, put, take} from 'redux-saga/effects'
// import api from '../app/api'

// Collection of all saga tasks to initiate
const sagas = []

/**
 * Entry point to start running all initial saga tasks
 * @return {void}
 */
export default function* saga() {
  yield sagas.map(call)
}
