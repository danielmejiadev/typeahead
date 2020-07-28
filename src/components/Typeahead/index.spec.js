// Dependencies
import React from 'react';
import { shallow } from 'enzyme';

// Components
import TypeaheadProvider from '../TypeaheadProvider';
import TypeaheadContainer from '../TypeaheadContainer';

// Under test
import Typeahead from './index';

describe('Typeahead', () => {
  let component;
  const props = {
    list: [
      'hello',
      'hi',
    ],
  };

  beforeEach(() => {
    component = shallow(<Typeahead {...props} />)
  });

  it('should render correctly', () => {
    const { list } = component
      .find(TypeaheadProvider)
      .first()
      .props();

    const container = component
      .find(TypeaheadContainer)
      .exists();

    expect(list).toEqual(props.list);
    expect(container).toBeTruthy();
  });
});
