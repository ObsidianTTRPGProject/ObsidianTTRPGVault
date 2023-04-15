```dataviewjs
// input field and button
dv.el("bold", "Input Strength: ")
const inputField = dv.el('input', "input field")
const btn = dv.el('button', "Calculate Jump Distances")


// template out the 4 results to remove
dv.paragraph("Long jump with running start: - feet")
dv.paragraph("Long jump from standing: - feet")
dv.paragraph("High jump with running start: - feet")
dv.paragraph("High jump from standing: - feet")

// on-click event
btn.addEventListener('click', (event) => {
    event.preventDefault()

    // remove the last 4 results (or defaults)
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()

    // calculate and format
    let strength = parseInt(inputField.value);
    let strMod = Math.floor((strength - 10) / 2);

    // display results
    dv.paragraph("Long jump with running start: " + strength + " feet")
    dv.paragraph("Long jump from standing: " + (strength / 2) + " feet")
    dv.paragraph("High jump with running start: " + (strMod+3) + " feet")
    dv.paragraph("High jump from standing: " + ((strMod+3) / 2) + " feet")
});
```