// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as HookState from '../../hooks/useTypehead';
import * as HookEffect from '../../hooks/useOutsideHandlerEffect';

// Components
import SearchInput from '../SearchInput';
import Suggestions from '../Suggestions';

// Under test
import TypeaheadContainer from './index';

describe('TypeaheadContainer', () => {
  let component;
  const state = {
    search: 'value',
    selectSuggestion: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(HookState, 'useTypeahead').mockReturnValue(state);
    jest.spyOn(HookEffect, 'useOutsideHandlerEffect').mockImplementation((callback) => callback());
    component = shallow(<TypeaheadContainer />)
  });

  afterEach(() => {
    expect(state.selectSuggestion).toHaveBeenCalledWith(state.search);
  });

  it('should render correctly', () => {
    const input = component
      .find(SearchInput)
      .exists();

    const suggestions = component
      .find(Suggestions)
      .exists();

    expect(input).toBeTruthy();
    expect(suggestions).toBeTruthy();
  });
});
