---
ContentType: YouTube
ChallengeLevel: Intermediate
PubishDate: 15/10/2022
---
In this video we look at various ways to add Timelines to your notes. We take a look at the Timelines plugin which supports both horizontal and vertical style timelines. We go on to discuss plugin health and as a result we have a look at an alternative option which is the Timeline Callout feature provided as part of the ITS Theme. Instructions are provided for installing the callout snippet without the ITS Theme for those that prefer a different look.

<iframe width="1237" height="696" src="https://www.youtube.com/embed/SNFRh7TwZXM" title="Obsidian - Timelines" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Required Plugins or Config
The following plugins are used in this video. 
- Timelines
- ITS Theme

## Examples
Here are some working examples of the plugin. 

### Horizontal Timeline
test needs to match the tag you have entered in your notes. See [[Timeline Note 1]] and [[Timeline Note 2]] for examples on how to add time entries. 

```timeline
test
```


### Vertical Timeline
- tags = the tag you are using in your notes. 
- startDate: set this to the start of the time period you are using. 
- endDate: set this to the end of the time period you are using. 
- divHeight: adjust to your own needs. 
- minDate: set this to the start of the time period you are using. 
- minDate: set this to the end of the time period you are using. 

See [[Timeline Note 1]] and [[Timeline Note 2]] for examples on how to add time entries. 

```timeline-vis
tags=test
startDate=100
endDate=1000
divHeight=200
minDate=100
maxDate=1000
```

### ITS Timeline Callout
This example shows how to use the Timeline Callout that comes with ITS Theme. Note that you don't have to use the ITS Theme. You can instead save a copy of this file into your Vaults snippet folder. 

File: https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Snippets/S%20-%20Callouts.css
Where To Save: YourVault/.obsidian/snippets
Turn It On: Obsidian > Settings > Appearance > CSS Snippets > Enable

> [!timeline|t-l] **[[Timeline Note 1]]** _Sammaster is born_
> Sammaster First-Speaker, founder of the Cult of the Dragon, is born, though the location and exact date of his birth are lost to time.
> ![[Abjuration.png|right|100]]

> [!timeline|t-r] **[[Timeline Note 2]]** *The Year of the Deadly Torch*
> The traveling mage Mnethos takes the young Sammaster as an apprentice, noting the boy's fierce intelligence and fascination with magic.
> ![[Abjuration.png|center|300]]

> [!timeline|t-l t-5] **818 DR** *The Year of Broken Locks*
> Mnethos the mage introduces Sammaster to the glory of Our Lady of Mysteries, the worship of whom Sammaster soon adopts.
> ![[Abjuration.png|left|200]]

> [!timeline|t-r] **c. 825 DR** *Sammaster Leaves Mnethos*
> Sammaster leaves the service of his magely tutor, Mnethos, having learned all he can from the itinerant wizard.