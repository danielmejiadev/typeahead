// Dependencies
import React from 'react';
import PropTypes from 'prop-types'

// Components
import TypeaheadProvider from '../TypeaheadProvider';
import TypeaheadContainer from '../TypeaheadContainer';

export function Typeahead({ list }) {
  return (
    <TypeaheadProvider list={list}>
      <TypeaheadContainer />
    </TypeaheadProvider>
  )
}

Typeahead.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Typeahead;