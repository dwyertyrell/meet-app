import { mockData } from "./mock-data";

export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
}

//this function will be imported into 'CitySearchTest.js'.
// when called, it will fetch the array in 'mockData.js' file  
export const getEvents = async () => {
  return mockData;
};