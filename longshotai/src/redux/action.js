import {FETCH_JSON_DATA, SET_KEYWORD_RESULT,SET_INTENT_MAP, SET_KEYWORD_DIFFICULTY,SET_SEARCH_FILTER,SET_KEYWORD_METRIC } from './constant';

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
    const keywordDifficulty = function(payload) {
        if (payload > 85) {
          return {
            rating: "Very hard",
            text:
              "The absolute hardest keywords to compete for, especially for a new website. These will demand a lot of on page SEO, link building, and content promotion efforts to eventually rank and acquire traffic.",
            color: "#D1002F",
          };
        } else if (payload >= 70) {
          return {
            rating: "Hard",
            text:
              "Even stiffer competition. These keywords will demand more effort in terms of getting higher authority referring domains in order to rank your well-optimized and helpful content among the top pages.",
            color: "#FF4953",
          };
        } else if (payload >= 50) {
          return {
            rating: "Difficult",
            text:
              "You'll need to have some backlinks in addition to your well-structured, helpful and optimized content in order to compete here.",
            color: "#FF8C43",
          };
        } else if (payload >= 30) {
          return {
            rating: "Possible",
            text:
              "Slightly more competition. You'll need well-structured and unique content appropriately optimized for your keywords.",
            color: "#FDC23C",
          };
        } else if (payload >= 15) {
          return {
            rating: "Easy",
            text:
              "These keywords have some competition but are still possible to rank for when you're starting out. To be able to rank for these, you'll need quality content focused on the keyword's intent.",
            color: "#59DDAA",
          };
        } else {
          return {
            rating: "Very easy",
            text:
              "These are the best opportunities to start ranking new webpages on Google as soon as possible without backlinks.",
            color: "#009F81",
          };
        }
    }
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