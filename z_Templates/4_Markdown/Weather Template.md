---
---
<%*
let qcLayout = await  tp.system.suggester(["Horizontal Layout", "Vertical Layout"], [1, 2])
layout = qcLayout
_%>
<%*
let qcSeason = await  tp.system.suggester(["Spring", "Summer", "Fall", "Winter"], ["1", "2", "3", "4"])
passedSeason = qcSeason
_%>
<%*
weatherText = tp.user.WeatherGenerator(tp, layout, passedSeason)
_%>
<% weatherText %>
