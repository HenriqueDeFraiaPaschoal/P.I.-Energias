plots2 = document.getElementsByClassName("chart2");

const energies2 = ["Petróleo e derivados", "Derivados da cana de açucar", "Gás Natural", "Hidráulica", "Carvão vegetal", "Outras renováveis", "Carvão mineral", "Nuclear", "Outras não renováveis"]; //Stays on the X-axis
const traffic2 = [34.4, 16.4, 13.3, 11.0, 8.7, 8.7, 5.6, 1.3, 0.6]; //Stays on the Y-axis

new Chart(plots2, {
  type: "doughnut", //Declare the chart type
  data: {
    labels: energies2, //Defines each segment
    datasets: [
      {
        data: traffic2, //Determines segment size
        //Color of each segment
        backgroundColor: [
          "#c00000",
          "#ed7d31",
          "#70ad47",
          "#00b0f0",
          "#b17fad",
          "#ffc000",
          "#2f5597",
          "#7f6000",
          "#7d7d7d"
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
