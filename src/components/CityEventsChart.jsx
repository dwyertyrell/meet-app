import {useState, useEffect} from 'react';
import CitySearch from './CitySearch';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer} from 'recharts';


  const CityEventsChart = ({allLocations, events}) => {
    const [data, setData] = useState([])

    useEffect(() => {
      setData(getData());
    },[`${events}`])

    const getData = () => {
      // mapping the location of every individual event, then assigning the 'count' as the length of that array. 
      const data = allLocations.map((location) => {
        const count = events.filter((event) => event.location === location).length
        
        //split the sting at the comma, and return the 1st element of array
        const city = location.split(',')[0] // the 'Cape Town' is split into two elements- hence only 'Cape is rendered. if use split(',')[0], the location holding more than one comma, will not render. use an if-else statement within a map, to execute either split(',') if there is only 1 comma, else split(' ')
      
        //  let city; TRYING TO RENDER CAPE TOWN AND SANTIAGO AT SAME TIME 
      //     // if the number of comma is one less than the words in the string 
      //     if (location.split.length -1 ) { // for text with more than 1 comma
      //      city= location.split(',')[0]
      //     }else {
      //       if(location.split){
      //       city = location.split(' ')[0]
      //     }}
    
        return {city, count};
        // return {count, number};
      })
      return data;
    }
    return (
      <ResponsiveContainer width="99%" height={400}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="category" dataKey="city" name="City" />
        <YAxis type="number" dataKey="count" name="number of events" allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
    )
      
    
  }

  export default CityEventsChart