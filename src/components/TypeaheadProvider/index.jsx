// Dependencies
import React from 'react';
import PropTypes from 'prop-types'

// Hooks
import { useTypeaheadState } from '../../hooks/useTypeaheadState';

// Context
import { TypeaheadContext } from '../../Typeahead.context';

export function TypeaheadProvider({ children, list }) {
  const { search, onSearch, suggestions, selectSuggestion, handleKeyup } = useTypeaheadState(list);

  return (
    <TypeaheadContext.Provider value={{ search, onSearch, suggestions, selectSuggestion, handleKeyup }}>
      {children}
    </TypeaheadContext.Provider>
  )
}

TypeaheadProvider.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
}

export default TypeaheadProvider;