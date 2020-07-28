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
        {suggestions.map((item) => (
          <li
            role="tab"
            key={item.value}
            tabIndex="0"
            onClick={() => selectSuggestion(item.value)}
            onKeyDown={(event) => handleKeyup(event, item.value)}
          >
            <b>{item.highlight}</b>
            {item.rest}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Suggestions;