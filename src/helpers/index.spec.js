// Under test
import * as Helpers from './index';

describe('Helpers', () => {
  it('should sanitize value', () => {
    expect(Helpers.sanitize('  VALUE ')).toBe('value');
  });

  it('should calculate suggestions for a given list and query', () => {
    const list = [
      'God',
      'Good',
      'Google',
    ];
    const query = 'go';
    expect(Helpers.calculateSuggestions(list, query)).toEqual([
      {
        value: 'God',
        highlight: 'Go',
        rest: 'd',
      },
      {
        value: 'Good',
        highlight: 'Go',
        rest: 'od',
      },
      {
        value: 'Google',
        highlight: 'Go',
        rest: 'ogle',
      },
    ])

  });
});
