import * as actionTypes from "./constants";

const initialState = {
  characters: null,
  charactersLoading: false,
  charactersLoadingError: null,
  character: null,
  characterLoading: false,
  characterLoadingError: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CHARACTERS:
      return {
        ...state,
        characters: null,
        charactersLoading: true,
        charactersLoadingError: null
      };

    case actionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        charactersLoading: false,
        charactersLoadingError: null
      };

    case actionTypes.FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        characters: null,
        charactersLoading: false,
        charactersLoadingError: action.error
      };

    case actionTypes.FETCH_CHARACTER:
      return {
        ...state,
        character: null,
        characterLoading: true,
        characterLoadingError: null
      };

    case actionTypes.FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.payload,
        characterLoading: false,
        characterLoadingError: null
      };

    case actionTypes.FETCH_CHARACTER_ERROR:
      return {
        ...state,
        character: null,
        characterLoading: false,
        characterLoadingError: action.error
      };

    default:
      return state;
  }
};

export default reducer;
