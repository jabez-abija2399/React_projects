import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // function to paginate an array of items
  console.log("items", items);
  console.log("pageNumber", pageNumber);
  console.log("pageSize", pageSize);
  const startIndex = (pageNumber - 1) * pageSize; // calculate the start index of the items on the current page
  console.log("startIndex", startIndex);
  return _(items) // convert the items array to a lodash wrapper
    .slice(startIndex) // slice the array starting from the start index
    .take(pageSize) // take the number of items equal to the pageSize
    .value(); // convert the lodash wrapper back to an array
} // return the paginated items
