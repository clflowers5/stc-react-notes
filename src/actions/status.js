const FETCHING_DATA = 'FETCHING_DATA';
const RETRIEVED_DATA = 'RETRIEVED_DATA';

function fetchData() {
  return {
    type: FETCHING_DATA
  };
}

function retrievedData() {
  return {
    type: RETRIEVED_DATA
  };
}

export {
  FETCHING_DATA,
  RETRIEVED_DATA,
  fetchData,
  retrievedData
}
