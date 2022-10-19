plots = document.getElementById("chart");

const months = ["Hidrelérica", "Termelétrica", "Biomassa", "Eólica", "Outras"]; //Stays on the X-axis
const traffic = [60.5, 16.2, 8.6, 8.3, 2.7]; //Stays on the Y-axis

new Chart(plots, {
  type: "doughnut", //Declare the chart type
  data: {
    labels: months, //Defines each segment
    datasets: [
      {
        data: traffic, //Determines segment size
        //Color of each segment
        backgroundColor: [
          "rgba(7, 150, 245)",
          "rgba(252, 5, 79)",
          "rgba(196, 190, 183)",
          "rgba(21, 227, 235)",
          "rgba(240, 5, 252)",
          "rgb(0,12,255)",
          "rgb(17, 252, 5)",
        ],
      },
    ],
  },
  options: {
    legend: { display: true }, //This is true by default.
  },
});
