> ###### Travel (`=[[Party Configuration]].TravelMethod` / `=[[Party Configuration]].HoursPerDay` hrs per day)
> ###### [[Party Configuration]]  / [[Exhaustion]]:  `=[[Party Configuration]].ExhaustionLevel`
> Destination |  Travel Days  |
> ---|---|
> [[Voonlar]] | 🕓`= round(90 * ([[Party Configuration]].MinutesPerMile * choice([[Party Configuration]].ExhaustionLevel > 1, 2, 1)) / 60 / [[Party Configuration]].HoursPerDay, 1)` |