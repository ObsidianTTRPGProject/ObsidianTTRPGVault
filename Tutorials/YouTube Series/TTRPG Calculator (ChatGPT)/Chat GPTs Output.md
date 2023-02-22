```dataviewjs
// input field and button
dv.el("bold", "Input Character Level: ")
const levelField = dv.el('input', "input field")
levelField.setAttribute("type", "number")
levelField.setAttribute("min", "1")
levelField.setAttribute("max", "20")
levelField.setAttribute("value", "6") // update default level to 6
dv.el('br')

dv.el("bold", "Input Task Level: ")
const taskLevelField = dv.el('input', "input field")
taskLevelField.setAttribute("type", "number")
taskLevelField.setAttribute("min", "0")
taskLevelField.setAttribute("max", "30")
taskLevelField.setAttribute("value", "0")
dv.el('br')

dv.el("bold", "Input Modifier: ")
const modifierField = dv.el('input', "input field")
modifierField.setAttribute("type", "number")
modifierField.setAttribute("value", "0")
dv.el('br')

const btn = dv.el('button', "Calculate DC")

// template out the result to remove
dv.paragraph("DC: -")

// on-click event
btn.addEventListener('click', (event) => {
    event.preventDefault()

    // remove the last result (or default)
    this.container.lastChild.remove()

    let level = parseInt(levelField.value)
    let taskLevel = parseInt(taskLevelField.value)
    let modifier = parseInt(modifierField.value)

    // calculate DC
    let dc = 10 + (2 * (taskLevel - level)) + modifier

    // display DC
    dv.paragraph("DC: " + dc)
});
```