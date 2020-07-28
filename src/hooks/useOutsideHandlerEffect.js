// Dependencies
import React from 'react';

/**
 * Custom hook to validate if outside of container ref was clicked.
 * @param { Function } callback The callback to execute when a click was detectede outside.
 * @returns { React.MutableRefObject } A react reference to assing for a wrapper container.
 */
export function useOutsideHandlerEffect(callback) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      const { target } = event;

      if (!containerRef.current?.contains(target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [containerRef, callback]);

  return containerRef;
}