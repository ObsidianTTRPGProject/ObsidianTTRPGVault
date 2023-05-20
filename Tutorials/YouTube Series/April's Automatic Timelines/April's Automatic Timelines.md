---
aat-event-start-date: 359 # Required 
aat-event-end-date: 435 # Optional, can be set to `true` if you want it to span troughout the entire timeline 
aat-render-enabled: true # Enables this note to be rendered in a timeline 
timelines: [timeline, event] # This note should be rendered in the timeline with the name "timeline" or "event"
---

# April's Automatic Timelines  - Example


```aat-vertical
timelinename
```

Timelines can be a great way to show and manage the historic events that are happening in your game or world. There are a few different wayts to manage timelines within Obsidian. All of which have their different strengths. [[April's Automatic Timelines]] is the latest plugin (06/05/2023) to provide Timeline functionality and it works in a nice easy to use way. 

First you need to install the plugin from Settings > Community Plugins > Browse > Search ([[April's Automatic Timelines]]) > Install > Enable

Make sure you read the Read Me for up to date instructions on how to use this plugin. 

## Event Notes - Front Matter 

> [!warning]+ Message
> aat-event-start-date: 359 # Required 
> aat-event-end-date: 435 # Optional, can be set to `true` if you want it to span troughout the entire timeline 
> aat-render-enabled: true # Enables this note to be rendered in a timeline 
> timelines: [timeline, event] # This note should be rendered in the timeline with the name "timeline" or "event"


If you check the front matter on this note you can see the default options for setting up a new event. Simply put this front matter into a note, modify the values per your required dates and it will be rendered in the timeline. 

Then from any note you can add [[Front Matter (YAML) and Tags|Front Matter]] per the instructions. 

## Timeline Example



## Fantasy Calendar Integration

The Fantasy Calendar plugin by Jeremy Valentine is a fantastic addon to a vault for anyone who needs to track events, days, months, etc in their fantasy world. Turns out though that you can integrate both plugins together. As you add event notes, both the Timeline and the Calendar can update to display that event. There is a trick to this though, you must create new Events as notes (using a Template) as creating the events through the calendar itself will not work. 

- Install both plugins. 
- Go into the settings for April's Automatic Timelines and change the highlighted settings. 

![[Example - Aprils Automatic Timelines Settings.png]]

- Change them to the following:

![[Example - Aprils Automatic Timelines Settings New.png]]

This is the Front Matter that is used by Fantasy Calendar and by changing it so that both plugins use the same Front Matter we can achieve a cool outcome where one event displays in both the Timeline and the Calendar. 

## Create Templates

The step to making this process repeatable in an easy way is to create templates. I have made a few already. 

[[Timeline - Add Event]]
[[Timeline - Insert Event into Frontmatter]]
[[Timeline - Render Timeline]]