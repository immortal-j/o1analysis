const Data = [
  {
    id: 1,
    name: "Pratik",
    leetcode: {
      series: [45, 52, 78],
      labels: ["Hard", "Medium", "Easy"],
    },
    stackgraph: {
      series: [
        {
          name: "Correct",
          data: [55, 62, 78, 22, 38],
        },
        {
          name: "Incorrect",
          data: [-55, -62, -78, -22, -38],
        },
      ],
      labels: ["DAA", "DSA", "DBMS", "SE", "OS"],
    },
    linegraph: {
      labels: ["DAA", "DSA", "DBMS", "SE", "OS"],
      series: [55, 62, 78, 22, 38],
    },
  },
  {
    id: 2,
    name: "Twinshu",
    leetcode: {
      series: [45, 52, 78],
      labels: ["Hard", "Medium", "Easy"],
    },
    stackgraph: {
      series: [
        {
          name: "Correct",
          data: [25, 33, 41, 88, 13],
        },
        {
          name: "Incorrect",
          data: [-32, -10, -22, -54, -33],
        },
      ],
      labels: ["DAA", "DSA", "DBMS", "SE", "OS"],
    },
    linegraph: {
      labels: ["DAA", "DSA", "DBMS", "SE", "OS"],
      series: [23, 35, 42, 60, 70],
    },
  },
];

export default Data;