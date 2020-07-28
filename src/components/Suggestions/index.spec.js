// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Hooks
import * as Hook from '../../hooks/useTypehead';

// Under test
import Suggestions from './index';

describe('Suggestions', () => {
  let component;
  const state = {
    suggestions: [
      {
        value: 'value',
        highlight: 'va',
        rest: 'lue',
      }
    ],
    selectSuggestion: jest.fn(),
    handleKeyup: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(Hook, 'useTypeahead').mockReturnValue(state);
    component = shallow(<Suggestions />)
  });

  it('should render correctly', () => {
    const { children } = component
      .find('li')
      .first()
      .props();

    const [highlight, rest] = children;
    expect(highlight.props.children).toBe('va');
    expect(rest).toBe('lue');
  });

  it('should render null', () => {
    jest.spyOn(Hook, 'useTypeahead').mockReturnValue({ ...state, suggestions: [] });
    component.setProps({});
    expect(component.html()).toBeNull();
  });

  it('should manage on click', () => {
    component
      .find('li')
      .first()
      .props()
      .onClick();

    expect(state.selectSuggestion).toHaveBeenCalledWith('value')
  });

  it('should manage on key up', () => {
    const event = { target: null };
    component
      .find('li')
      .first()
      .props()
      .onKeyUp(event);

    expect(state.handleKeyup).toHaveBeenCalledWith(event, 'value')
  });
});
