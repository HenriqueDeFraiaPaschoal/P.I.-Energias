plots = document.getElementById("chart");

const energies = ["Hidráulica", "Gás Natural", "Eólica", "Biomassa", "Carvão e derivados", "Derivados do petróleo", "Solar", "Nuclear"]; //Stays on the X-axis
const traffic = [56.8, 12.8, 10.6, 8.2, 3.9, 3.0, 2.5, 2.2]; //Stays on the Y-axis

new Chart(plots, {
  type: "doughnut", //Declare the chart type
  data: {
    labels: energies, //Defines each segment
    datasets: [
      {
        data: traffic, //Determines segment size
        //Color of each segment
        backgroundColor: [
          "#00b0f0",
          "#70ad47",
          "#f8cbad",
          "#ed7d31",
          "#1f4e79",
          "#c00000",
          "#ffc000",
          "#7f6000"
        ],
      },
    ],
  },
  options: {
    legend: { display: true,
    labels: {
      fontColor: '#000'
    } },
    responsive: true //This is true by default.
  },
});

