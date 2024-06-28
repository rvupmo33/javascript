chart();

async function chart() {
  const ctx = document.getElementById("myChart");
  const data = await myChart();
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.ys,
      datasets: [
        {
          label: "Global temp",
          data: data.tp,
          borderWidth: 1,
        },
        {
          label: "NHem temp",
          data: data.nh,
          borderWidth: 1,
        },
        {
          label: "SHem temp",
          data: data.sh,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function myChart() {
  let ys = [];
  let tp = [];
  let nh = [];
  let sh = [];
  const response = await fetch("ZonAnn.Ts+dSST.csv");
  const data = await response.text();
  const table = data.split("\n").slice(1);
  table.forEach((e) => {
    const columns = e.split(",");
    const year = columns[0];
    ys.push(year);
    const temp = columns[1];
    tp.push(temp);
    const NHem = columns[2];
    nh.push(NHem);
    const SHem = columns[3];
    sh.push(SHem);
  });
  return { ys, tp, nh, sh };
}
