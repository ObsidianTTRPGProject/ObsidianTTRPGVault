

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