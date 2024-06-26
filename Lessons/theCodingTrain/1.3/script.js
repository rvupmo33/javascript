chartIt();

async function chartIt() {
  const data = await getData();
  const ctx = document.getElementById("chart");
  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: data.xs,
      datasets: [
        {
          label:
            "Glob Combined Land-Surface Air and Sea-Surface Water Temperature in C°",
          data: data.ys,
          borderWidth: 1,
        },
        {
          label:
            "NHem Combined Land-Surface Air and Sea-Surface Water Temperature in C°",
          data: data.nh,
          borderWidth: 1,
        },
        {
          label:
            "Combined Land-Surface Air and Sea-Surface Water Temperature in C°",
          data: data.sh,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value, index, ticks) {
              return value + "°";
            },
          },
        },
      },
    },
  });
}

async function getData() {
  const xs = [];
  const ys = [];
  const nh = [];
  const sh = [];

  const response = await fetch("ZonAnn.Ts+dSST.csv");
  const data = await response.text();

  const table = data.split("\n").slice(1);
  table.forEach((elt) => {
    const columns = elt.split(",");
    const year = columns[0];
    xs.push(year);
    const temp = columns[1];
    ys.push(parseFloat(temp) + 14);
    const NHem = columns[2];
    nh.push(NHem);
    const SHem = columns[3];
    sh.push(SHem);
  });
  return { xs, ys, nh, sh };
}
