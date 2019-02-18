import apiUrl from "../constants/apiUrl";
import * as constants from "../store/constants";

export const fetchCharacters = () => {
  return dispatch => {
    dispatch({ type: constants.FETCH_CHARACTERS });

    return fetch(`${apiUrl}people/`)
      .then(handleErrors)
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: constants.FETCH_CHARACTERS_SUCCESS,
          payload: json.results
        })
      )
      .catch(err =>
        dispatch({
          type: constants.FETCH_CHARACTERS_ERROR,
          payload: err
        })
      );
  };
}

export const fetchCharacter = (id) => {
  return dispatch => {
    dispatch({ type: constants.FETCH_CHARACTER, id: id });

    return fetch(`${apiUrl}people/${id}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(json =>
        dispatch({
          type: constants.FETCH_CHARACTER_SUCCESS,
          payload: json
        })
      )
      .catch(err =>
        dispatch({
          type: constants.FETCH_CHARACTER_ERROR,
          payload: err
        })
      );
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
