// Dependencies
import React from 'react';

// Hooks
import { useTypeahead } from '../../hooks/useTypehead';
import { useOutsideHandlerEffect } from '../../hooks/useOutsideHandlerEffect';

// Components
import SearchInput from '../SearchInput';
import Suggestions from '../Suggestions';

// Styles
import './styles.css';

export function TypeaheadContainer() {
  const { search, selectSuggestion } = useTypeahead();
  const containerRef = useOutsideHandlerEffect(() => selectSuggestion(search));

  return (
    <div className="container" ref={containerRef}>
      <SearchInput />
      <Suggestions />
    </div>
  )
}

export default TypeaheadContainer;