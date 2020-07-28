/**
 * Sanitize string value by cleaning white spaces and sensitve case.
 * @param { string } value The value to clean
 * @returns { string } The value cleaned.
 */
export function sanitize(value) {
  return value
    .trim()
    .toLowerCase();
}

/**
 * Calcalate the suggestions based on a list of data and a given search criteria.
 * @param { Array } list The list of data.
 * @param { string } query The query to filter list.
 * @returns { Array } An array of values filtered into the list, including the highlight text.
 */
export function calculateSuggestions(list, query) {
  const querySanitized = sanitize(query);

  return list
    .filter((item) => querySanitized && sanitize(item).startsWith(querySanitized))
    .map((item) => ({
      value: item,
      highlight: item.slice(0, querySanitized.length),
      rest: item.slice(querySanitized.length)
    }));
}