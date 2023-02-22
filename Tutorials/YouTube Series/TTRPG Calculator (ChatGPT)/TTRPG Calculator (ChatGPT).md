

# PF2e - Jump Distance Calculator

`Credit: Xentis and Steveax are the wizards who created the original jump calculator, all hail the Wizards!`

This is a calclator that's written in Javascript. It uses the Dataview plugin with Javascript enabled in the settings. 

> [!warning]+ Installation
> Settings > Community Plugins > Browse > Dataview > Install > Enable
> Settings >  Community Plugins > Dataview > Options > Tick both of the options below. 
> ![[Pasted image 20230222201040.png|500]]

Once the installation is complete the following should work in your note. This is a fantastic example of the power of Javascript within our notes. That on it's own can be an amazing tool in the right hands. 

---

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

# PF2e - DC Calculator

The issue for most though... is that we are not programmers. If you asked me to code the solution above I would not be able to. I could likely hack something together with A LOT OF GOOGLING! But I am not a proficient coder, especially not with JavaScript. 

But on November 2022 ChatGPT was released to the world and that changed everything. 

The following application was written by ChatGPT by simply asking it to. I copied in the original calculator from above and asked it to use the same language and syntax and the rest is history. 

---

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

# PF2e Travel Calculator 

This was also created by ChatGPT. This was a far more complex calculator and it took around 1.5 hours if going back and forth with ChatGPT to arrive at the desirable outcome. 

---

| **Speed** | **Feet per Minute** | **Miles per Hour** | **Miles per Day** |
| --------- | ------------------- | ------------------ | ----------------- |
| 10        | 100                 | 1                  | 8                 |
| 15        | 150                 | 1.5                | 12                |
| 20        | 200                 | 2                  | 16                |
| 25        | 250                 | 2.5                | 20                |
| 30        | 300                 | 3                  | 24                |
| 35        | 350                 | 3.5                | 28                |
| 40        | 400                 | 4                  | 32                |
| 50        | 500                 | 5                  | 40                |
| 60        | 600                 | 6                  | 48                |

---

```dataviewjs
// input field and button
dv.el("bold", "Input Distance in Miles: ")
const distanceField = dv.el('input', "input field")
dv.el('br')
dv.el("bold", "Input Number of Hours Travelled per Day: ")
const hoursField = dv.el('input', "input field")
hoursField.setAttribute("value", "8")
dv.el('br')
dv.el("bold", "Input Maximum Party Speed: ")
const speedField = dv.el('input', "input field")
dv.el('br')
const btn = dv.el('button', "Calculate Travel Time")

// template out the result to remove
dv.paragraph("Travel Time:")

// on-click event
btn.addEventListener('click', (event) => {
    event.preventDefault()

    // remove the last result (or default)
    this.container.lastChild.remove()

    let distance = parseFloat(distanceField.value)
    let maxSpeed = parseFloat(speedField.value)
    let hoursPerDay = parseFloat(hoursField.value)
    let milesPerHour = 0

    if (maxSpeed >= 10 && maxSpeed < 15) {
        milesPerHour = 1.0
    } else if (maxSpeed >= 15 && maxSpeed < 20) {
        milesPerHour = 1.5
    } else if (maxSpeed >= 20 && maxSpeed < 25) {
        milesPerHour = 2.0
    } else if (maxSpeed >= 25 && maxSpeed < 30) {
        milesPerHour = 2.5
    } else if (maxSpeed >= 30 && maxSpeed < 35) {
        milesPerHour = 3.0
    } else if (maxSpeed >= 35 && maxSpeed < 40) {
        milesPerHour = 3.5
    } else if (maxSpeed >= 40 && maxSpeed < 50) {
        milesPerHour = 4.0
    } else if (maxSpeed >= 50 && maxSpeed < 60) {
        milesPerHour = 5.0
    } else if (maxSpeed === 60) {
        milesPerHour = 6.0
    } else {
        dv.paragraph("Invalid speed entered. Speed should be between 10 and 60 mph.")
        return
    }

    let totalHours = distance / milesPerHour
    let travelDays = Math.floor(totalHours / hoursPerDay)
    let travelHours = Math.floor(totalHours % hoursPerDay)
    let travelMinutes = Math.round((totalHours % 1) * 60)

    dv.paragraph(`Travel Time: ${travelDays} day(s), ${travelHours} hour(s), and ${travelMinutes} minute(s)`)
});
```