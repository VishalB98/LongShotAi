import {FETCH_JSON_DATA, SET_KEYWORD_RESULT,SET_INTENT_MAP, SET_KEYWORD_DIFFICULTY,SET_SEARCH_FILTER,SET_KEYWORD_METRIC } from './constant';
import { keywordDifficulty } from '../utils/keywordDifficultyFormat';

export function fetchJsonData(payload) {
  return (dispatch) => {
    dispatch({ type: FETCH_JSON_DATA , payload });
  };
}

export function setKeywordResult(payload) {
  return (dispatch) => {
    dispatch({ type: SET_KEYWORD_RESULT, payload });
  };
}

export function setIntentMap(payload) {
  return (dispatch) => {
    dispatch({ type: SET_INTENT_MAP, payload });
  };
}

export function setKeywordDifficulty(payload) {
    let keywordDifficultyValue = keywordDifficulty(payload);
    return (dispatch) => {
        dispatch({ type: SET_KEYWORD_DIFFICULTY, payload: keywordDifficultyValue });
      }
}

export function setSearchFilter(payload) {
    return (dispatch) => {
        dispatch({ type: SET_SEARCH_FILTER, payload });
    };
}

export function setKeywordMetric(payload) {
    return (dispatch) => {
        dispatch({ type: SET_KEYWORD_METRIC, payload });
    };
}