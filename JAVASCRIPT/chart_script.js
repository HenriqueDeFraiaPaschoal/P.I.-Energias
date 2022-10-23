plots = document.getElementById("chart");

const energies = ["Hidrelérica", "Termelétrica", "Biomassa", "Eólica", "Outras"]; //Stays on the X-axis
const traffic = [60.5, 16.2, 8.6, 8.3, 2.7]; //Stays on the Y-axis

new Chart(plots, {
  type: "doughnut", //Declare the chart type
  data: {
    labels: energies, //Defines each segment
    datasets: [
      {
        data: traffic, //Determines segment size
        //Color of each segment
        backgroundColor: [
          "#00aeef",
          "#006673",
          "#939598",
          "#d4582a",
          "#6d5691",
          "rgb(0,12,255)",
          "rgb(17, 252, 5)",
        ],
      },
    ],
  },
  options: {
    legend: { display: true,
    labels: {
      fontColor: '#FFF'
    } },
    responsive: true //This is true by default.
  },
});
