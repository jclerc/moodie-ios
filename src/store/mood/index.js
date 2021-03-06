/* @flow */
/* eslint arrow-parens: 0 */

import type { Action } from '@helpers/redux'
import { SELECT_MOOD, UNSELECT_MOOD, CHANGE_MOOD } from './actionTypes'
import type { Mood } from './types'

const initialState = {
  isLoading: false,
  value: 'calm',
}

export default (state: Mood = initialState, action: Action): Mood => {
  switch (action.type) {
    case SELECT_MOOD:
    case CHANGE_MOOD: {
      return {
        ...state,
        value: action.payload.mood,
      }
    }
    default: {
      return state
    }
  }
}

export const selectMood = (mood: string) => ({
  type: SELECT_MOOD,
  payload: { mood },
})

export const onUnselect = (mood: string) => ({
  type: UNSELECT_MOOD,
  payload: { mood },
})
