// Dependencies
import React from 'react';

// Helpers
import { calculateSuggestions } from '../helpers';

const ENTER_CODE = 13;
const ESC_CODE = 27;

/**
 * Custom hook to generate the typeahead state required.
 * @param { Array<string> } list The list of values to filter.
 * @returns { Object } The state and actions for given manager.
 */
export function useTypeaheadState(list) {
  const [search, setSearch] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const onSearch = React.useCallback((event) => {
    const { target: { value } } = event;
    setSearch(value);
    setSuggestions(calculateSuggestions(list, value));
  }, [list]);

  const selectSuggestion = React.useCallback((sugesstion) => {
    setSearch(sugesstion);
    setSuggestions([]);
  }, []);

  const handleKeyup = (event, value) => {
    if (event.which === ENTER_CODE) {
      selectSuggestion(value)
    } else if (event.which === ESC_CODE) {
      setSuggestions([]);
    }
  }

  return { search, onSearch, suggestions, selectSuggestion, handleKeyup };
}