<iframe width="1237" height="696" src="https://www.youtube.com/embed/Pf0M3IuudpM" title="Obsidian - DnDBeyond Character Sheets with Custom Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Required Plugins or Config
The following plugins are required in this video. 
- Customm Frames

## Why Use This Over Standard I-Frames?
Quite simply because this plugin allows you to login to websites that otherwise do not work. DnDBeyond is a great example. You cannot login to the site using a standard i-frame and as such this plugin is required to overcome that issue. 

## Example:

This example will connect to the Obsidian Forums. 

```custom-frames
frame: Obsidian Forum
```

<br> %% This code just adds a breakline between other content. You can use it to space things out as you like. %%

This example will display the DnDBeyond Website. 
This one has a style set which defines the height and width of the frame. 

```custom-frames
frame: DnDBeyond
style: width: 50%; height: 600px
```