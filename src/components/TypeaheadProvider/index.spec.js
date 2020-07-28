// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useTypeaheadState';

// Under test
import TypeaheadProvider from './index';

describe('TypeaheadProvider', () => {
  let component;
  const props = {
    list: [
      'hello',
      'hi',
    ],
    children: <div></div>
  };
  const state = {
    search: 'value',
    onSearch: jest.fn(),
    suggestions: [],
    selectSuggestion: jest.fn(),
    handleKeyup: jest.fn(),
  }

  beforeEach(() => {
    jest.spyOn(Hook, 'useTypeaheadState').mockReturnValue(state);
    component = shallow(<TypeaheadProvider {...props} />)
  });

  afterEach(() => {
    expect(Hook.useTypeaheadState).toHaveBeenCalledWith(props.list);
  });

  it('should render correctly', () => {
    const { value } = component.props();

    expect(value).toEqual(state);
  });
});
