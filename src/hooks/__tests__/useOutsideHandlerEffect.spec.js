// Dependencies
import React from 'react';

// Under test
import { useOutsideHandlerEffect } from '../useOutsideHandlerEffect';

describe('UseOutsideHandlerEffect', () => {
  it('should Use Outside Handler Effect', () => {
    let cleanup;
    const callback = jest.fn();
    const event = {
      target: {
        id: 1,
      },
    };
    const containerRef = {
      contains: jest.fn()
        .mockReturnValueOnce(false)
        .mockReturnValueOnce(true),
    }
    jest.spyOn(React, 'useRef').mockReturnValue({ current: containerRef });
    jest.spyOn(React, 'useEffect').mockImplementation((callback) => {
      cleanup = callback();
    });
    jest.spyOn(document, 'addEventListener').mockImplementation((_listener, callback) => callback(event));
    jest.spyOn(document, 'removeEventListener').mockImplementation((_listener, callback) => callback(event));

    const ref = useOutsideHandlerEffect(callback);
    expect(ref.current).toEqual(containerRef);
    expect(callback).toHaveBeenCalled();
  });
});
