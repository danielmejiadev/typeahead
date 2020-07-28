// Dependencies
import React from 'react';

// Hooks
import { useTypeahead } from '../../hooks/useTypehead';

// Stylesz
import './styles.css'

export function Suggestions() {
  const { suggestions, selectSuggestion, handleKeyup } = useTypeahead();

  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div className="suggestions">
      <ul role="tablist">
        {suggestions.map((suggestion) => (
          <li
            role="tab"
            key={suggestion.value}
            tabIndex="0"
            onClick={() => selectSuggestion(suggestion.value)}
            onKeyUp={(event) => handleKeyup(event, suggestion.value)}
          >
            <b>{suggestion.highlight}</b>
            {suggestion.rest}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Suggestions;