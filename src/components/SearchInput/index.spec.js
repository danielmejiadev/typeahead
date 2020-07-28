// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useTypehead';

// Under test
import SearchInput from './index';

describe('SearchInput', () => {
  let component;
  const state = {
    search: 'search',
    suggestions: [],
    onSearch: jest.fn(),
    handleKeyup: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(Hook, 'useTypeahead').mockReturnValue(state);
    component = shallow(<SearchInput />)
  });

  it('should render correctly', () => {
    const { value, className } = component
      .find('input')
      .props();

    expect(value).toBe(state.search);
    expect(className).toBe('search-input');
  });

  it('should render highlightText', () => {
    jest.spyOn(Hook, 'useTypeahead').mockReturnValue({ ...state, suggestions: [{}] });
    component.setProps({})
    const { className } = component
      .find('input')
      .props();

    expect(className).toBe('highlightText search-input');
  });

  it('should manage on key up', () => {
    const event = { target: null };
    component
      .find('input')
      .props()
      .onKeyUp(event);

    expect(state.handleKeyup).toHaveBeenCalledWith(event, state.search)
  });
});
