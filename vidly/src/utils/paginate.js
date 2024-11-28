import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // function to paginate an array of items
  const startIndex = (pageNumber - 1) * pageSize; // calculate the start index of the items on the current page
  return _(items) // convert the items array to a lodash wrapper
    .slice(startIndex) // slice the array starting from the start index
    .take(pageSize) // take the number of items equal to the pageSize
    .value(); // convert the lodash wrapper back to an array
} // return the paginated items
