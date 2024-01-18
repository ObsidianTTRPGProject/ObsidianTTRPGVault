```dataviewjs
const pages = dv.pages()  // maybe narrow down to a subset of pages
  .groupBy(p => p.NoteIcon)
  .filter(p => !!p.key);  // filter out pages without noteType property

// Labels
const noteTypes = pages.map(p => p.key).values;
// Data
const noteTypesCount = pages.map(p => p.rows.length).values;

const chartData = {
    type: 'bar',
    data: {
        labels: noteTypes,
        datasets: [{
            label: 'Count',
            data: noteTypesCount,
            backgroundColor: [
                'gold'
            ],
        }]
    }
}

window.renderChart(chartData, this.container)
```

