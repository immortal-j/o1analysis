import React from "react";
import Chart from "react-apexcharts";
export const PieChart = () => {
  const line ={
    
    
          
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            width: 600,
            type: 'pie',
          },
          title: {
            text: "Overall Analysis ",
            position:"top",
            align: 'centre',
            margin: 0,
            padding:10,
            offsetX: 0,
            offsetY: 0,
            padding:'20px',
            floating: false,
            style: {
              fontSize:  '16px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#fff'
              
            },
        },
          labels: ['Topic-A', 'Topic-B', 'Topic-C', 'Topic-D', 'Topic-E'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    

return <Chart type="pie" options={line.options} series={line.series} />;
};

export default PieChart;
