let addProjectBtn = document.getElementById("addBtn");
let processProjectBtn = document.getElementById("processBtn")
let completeProjectBtn = document.getElementById("completeBtn")

let totalProjectMiddleLabel = document.getElementById("totalProjectMiddleLabel")
let toBeStartedSideLabel = document.getElementById("toBeStartedSideLabel");
let inProcessSideLabel = document.getElementById("inProcessSideLabel")
let completedSideLabel = document.getElementById("completedSideLabel")

let totalProjectsNum = 1;
let toBeStartedProjectsNum = 1;
let inProcessProjectsNum = 0;
let completedProjectsNum = 0;

//CHART
let myChart; 

document.addEventListener('DOMContentLoaded', function() {

  const chartData = {
    labels: ["To Be Started", "In Process", "Completed"],
    data: [toBeStartedProjectsNum, inProcessProjectsNum, completedProjectsNum],
  };
  
  const ctx = document.getElementById("myChart").getContext("2d");
  
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: chartData.labels,
      datasets: [
        {
          label: "Project Status",
          data: chartData.data,
          borderRadius: 150,
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    },
    options: {
      cutout: '70%',
      borderWidth: 10,
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });
});


//VALUEs

function updateChartData() {
  myChart.data.datasets[0].data = [toBeStartedProjectsNum, inProcessProjectsNum, completedProjectsNum];
  myChart.update();
}

function addProject(){
  totalProjectsNum += 1;
  totalProjectMiddleLabel.innerHTML = totalProjectsNum;

  toBeStartedProjectsNum +=1;
  toBeStartedSideLabel.innerHTML = toBeStartedProjectsNum;

  updateChartData();
}

function processProject(){
  if (toBeStartedProjectsNum != 0){
    inProcessProjectsNum +=1;
    toBeStartedProjectsNum -= 1;

    inProcessSideLabel.innerHTML = inProcessProjectsNum
    toBeStartedSideLabel.innerHTML = toBeStartedProjectsNum;

    updateChartData();
  }
}

function completeProject(){
  if (inProcessProjectsNum > 0) {
    inProcessProjectsNum -= 1;
    completedProjectsNum += 1;

    inProcessSideLabel.innerHTML = inProcessProjectsNum;
    completedSideLabel.innerHTML = completedProjectsNum;
    updateChartData();

  } else if(toBeStartedProjectsNum > 0){
    toBeStartedProjectsNum -= 1;
    completedProjectsNum += 1;

    toBeStartedSideLabel.innerHTML = toBeStartedProjectsNum;
    completedSideLabel.innerHTML = completedProjectsNum;
    updateChartData();
    
  }
}

