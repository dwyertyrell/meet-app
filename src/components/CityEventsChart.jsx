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
        
        const  getCityName = (location) => {
          if (location.includes('-')) {
            return location.split('-')[0];
          } else if(location.includes(',')){
            return location.split(',')[0];
          } else {
            return location.trim()
          }
        }
        // const city = getCityName(location);
        const city = location.split((/, | - /))[0];

        return {city, count};
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
        <XAxis type="category" dataKey="city" name="City" interval={0} angle={60} tick={{ dx: 20, dy: 40, fontSize: 14 }} />
        <YAxis type="number" dataKey="count" name="number of events" allowDecimals={false} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
    )
      
    
  }

  export default CityEventsChart