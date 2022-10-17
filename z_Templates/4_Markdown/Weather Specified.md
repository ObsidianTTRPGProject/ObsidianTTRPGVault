---
---
<%*
let qcLayout = await  tp.system.suggester(["Horizontal Layout", "Vertical Layout"], [1, 2])
layout = qcLayout
_%>
<%*
let qcSeason = await  tp.system.suggester(["Spring", "Summer", "Fall", "Winter"], ["Spring", "Summer", "Fall", "Winter"])
passedSeason = qcSeason
_%>
<%*
let qcDaily = await  tp.system.prompt("Daily Weather")
passedDaily = qcDaily
_%>
<%*
let qcDailyImg = await  tp.system.suggester(["Clear Skies", "Cloudy", "Cloudy Storm", "Lightning", "Mostly Cloudy", "Party Cloudy", "Rain Snow Showers", "Rainy", "Snow", "Stormy", "Tornado", "Windy"], ["clearSkies", "cloudy", "cloudyStorm", "lightning", "mostlyCloudy", "partyCloudy", "rainSnowShowers", "rainy", "snow", "stormy", "tornado", "windy"])
passedDailyImg = qcDailyImg
_%>
<%*
let qcDailyWind = await  tp.system.prompt("Daily Wind")
passedDailyWind = qcDailyWind
_%>
<%*
let qcTemp = await  tp.system.suggester(["Hotter", "Warmer", "Colder"], ["Hot", "Warm", "Cold"])
passedTemp = qcTemp
_%>
<%*
let qcNightly = await  tp.system.prompt("Nightly Weather")
passedNightly = qcNightly
_%>
<%*
let qcNightImg = await  tp.system.suggester(["Clear Skies", "Cloudy", "Cloudy Storm", "Lightning", "Mostly Cloudy", "Party Cloudy", "Rain Snow Showers", "Rainy", "Snow", "Stormy", "Tornado", "Windy"], ["clearSkiesNight", "cloudyNight", "cloudyNight", "lightningNight", "mostlyCloudyNight", "partyCloudyNight", "rainSnowShowersNight", "rainyNight", "snowNight", "stormyNight", "tornado", "windy"])
passedNightlyImg = qcNightImg
_%>
<%*
let qcNightlyWind = await  tp.system.prompt("Nightly Wind")
passedNightlyWind = qcNightlyWind
_%>
<%*
weatherText = tp.user.WeatherGeneratorSpecified(tp, qcLayout, passedSeason, passedDaily, passedDailyImg, passedDailyWind, passedTemp, passedNightly, passedNightlyImg, passedNightlyWind)
_%>
<% weatherText %>
