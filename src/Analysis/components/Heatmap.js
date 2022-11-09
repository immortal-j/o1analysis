import React from 'react'
import Chart from "react-apexcharts";

function generateData(count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString();
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}

const Heatmap = (props) => {
  const labels=props.HeatGraphLabel
  const  state= {
   
        series: [{
          name: 'Metric1',
          data: generateData(20, {
            min: 0,
            max: 90
          })
        
        },
        {
          name: 'Metric2',
          data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric3',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric4',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric5',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric6',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric7',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric8',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        },
        {
          name: 'Metric9',
  data: generateData(20, {
            min: 0,
            max: 90
          })
        }
        ],
        options: {
          title: {
            text: "Heatmap",
            align: "centre",
            margin: 10,
            padding: 0,
            offsetX: 0,
            offsetY: 0,
            padding: "20px",
            floating: false,
            style: {
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
            },
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#008FFB"],
          xaxis: {
            categories: labels,
            // categories: ["DAA", "DSA", "AI", "DBMS", "React", "OS", "MERN"],
            labels: {
              style: {
                colors: "#fff",
              },
            },
            title: {
              style: {
                color: "#fff",
              },
              text: "Subjects",
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: "#fff",
              },
            },
            title: {
              style: {
                color: "#fff",
              },
              text: "Performance",
            },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: true,
            offsetY: -25,
            offsetX: -5,
          },
          // labels: labels,
          responsive: [
            {
              breakpoint: 1400,
              options: {
                chart: {
                  height: "325rem"   
                },
                legend: {
                  position: "bottom",
                },
              },
            },
          ],
        },
      
      
      };
    
  return (
    <div>
          <Chart  options={state.options} series={state.series} type="heatmap" />;
    </div>
  )
}

export default Heatmap