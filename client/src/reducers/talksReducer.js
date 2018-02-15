import React from 'react';
import { FETCH_TALKS, RECEIVED_TALKS } from '../actions/talkActions';

export function TalksReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TALKS:
      return [...state];
    case RECEIVED_TALKS:
        return [...state, action.payload ];
    default:
      return state;
  }
}
