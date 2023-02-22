```dataviewjs
// input field and button
dv.el("bold", "Input Difficulty Level: ")
const inputField = dv.el('input', "input field")
const btn = dv.el('button', "Calculate DC")

// template out the 4 results to remove
dv.paragraph("Incredibly Easy DC:")
dv.paragraph("Very Easy DC:")
dv.paragraph("Easy DC:")
dv.paragraph("Normal DC:")
dv.paragraph("Hard DC:")
dv.paragraph("Very Hard DC:")
dv.paragraph("Incredibly Hard DC:")

// on-click event
btn.addEventListener('click', (event) => {
    event.preventDefault()

    // remove the last 6 results (or defaults)
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()
    this.container.lastChild.remove()

    let input_dc = parseInt(inputField.value);
    let dcMod = Math.floor((input_dc / 5)*2);
    let dcOutput = Math.floor(input_dc + 15 + dcMod)
    let varIncEasy = Math.floor(input_dc + 15 + dcMod-10)
    let varVryEasy = Math.floor(input_dc + 15 + dcMod-5)
    let varEasy = Math.floor(input_dc + 15 + dcMod-2)
    let varHard = Math.floor(input_dc + 15 + dcMod+2)
    let varVryHard = Math.floor(input_dc + 15 + dcMod+5)
    let varIncHard = Math.floor(input_dc + 15 + dcMod+10)

    dv.paragraph("Incredibly Easy DC: " + varIncEasy)
    dv.paragraph("Very Easy DC: " + varVryEasy)
    dv.paragraph("Easy DC: " + varEasy)
    dv.paragraph("Normal DC: " + dcOutput)
    dv.paragraph("Hard DC: " + varHard)
    dv.paragraph("Very Hard DC: " + varVryHard)
    dv.paragraph("Incredibly Hard DC: " + varIncHard)
});
```