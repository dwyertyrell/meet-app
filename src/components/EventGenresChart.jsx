import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { Pie, PieChart, ResponsiveContainer } from "recharts";


const EventGenresChart = ({events}) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  useEffect(() => {
  setData(getData())
  },[`${events}`]);

  //this function will find how many events there are for each genre
  const getData = () => {
    //the map is used to find what events belong to the current genres element in the loop iteration  
   const data = genres.map((genre) => {
    //filtering over the events array and returning an array of events that includes genre
    const filteredEvents = events.filter(event => event.summary.includes(genre));
    return { 
      //the returned object of the loop iteration of genres.map()
      name: genre,
      value: filteredEvents.length
    }
  })
  return data;  
}


// function is used to Update your pie chart’s labels.
   const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
   const RADIAN = Math.PI / 180;
   const radius = outerRadius;
   const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
   const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
   return percent ? (
     <text
       x={x}
       y={y}
       fill="#8884d8"
       textAnchor={x > cx ? 'start' : 'end'}
       dominantBaseline="central"
     >
       {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
     </text>
   ) : null;
 };

  return (
    <ResponsiveContainer width='99%' height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          fill= '#8884d8'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius = {130}
          >
        </Pie>
      </PieChart>

    </ResponsiveContainer>
  )
}

export default EventGenresChart; 


EventGenresChart.propTypes = {
  events: PropTypes.array.isRequired,
}
