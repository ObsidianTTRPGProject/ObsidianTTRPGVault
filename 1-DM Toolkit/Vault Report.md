```dataviewjs
// 1) Build a map of tag → count, only for #Category/... tags
//    and skipping any notes under z_Templates/
const tagCounts = {};
for (let page of dv.pages()) {
  // skip template folder
  if (page.file.path.startsWith("z_Templates/")) continue;

  // count only Category tags
  for (let tag of (page.file.tags || [])) {
    if (!tag.startsWith("#Category/")) continue;
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  }
}

// 2) Extract parallel arrays for labels & data
const labels = Object.keys(tagCounts);
const counts = Object.values(tagCounts);

// 3) Configure and render the bar chart
const chartData = {
  type: 'bar',
  data: {
    labels,
    datasets: [{
      label: 'Count',
      data: counts,
      backgroundColor: labels.map(() => 'gold'),
    }]
  },
  options: {
    scales: { y: { beginAtZero: true } }
  }
};

window.renderChart(chartData, this.container);
```

