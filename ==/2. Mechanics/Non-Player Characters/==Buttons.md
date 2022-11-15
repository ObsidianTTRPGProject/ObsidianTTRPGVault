---
ContentType: YouTube
ChallengeLevel: Medium
PubishDate: 0/0/1990
---

*Link to be updated once released*
<iframe width="1237" height="696" src="https://www.youtube.com/embed/Pf0M3IuudpM" title="Obsidian - DnDBeyond Character Sheets with Custom Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Benefit 
Buttons are cool because you can press them and when you press them things can happen. In this example the following will happen:
- User presses a button.
- The user is displayed a prompt to enter the name of the new note. 
- A new note is created.
- The note is moved to a specified folder. 
- A template is applied to the new note. 

So as a real-life use case. You need a new NPC, you press the New NPC button and a window pops up with a text box prompting you to enter the name of the new NPC. You enter it and press enter. Now the new note opens up in a new pane, already named correctly and with the NPC template applied ready for you to fill out. You don't need to move or find the note because it's already in your NPC folder. 

## Required Plugins or Config
The following plugins are required in this video. 
- Buttons
- Templater

## Example:
To make this work you will need a few things. 

1. A template that you wish to use on the new note. 
2. A note where you need to house the new button. 

### The Template

> [!danger]+ **IMPORTANT**
> For this to work my template needs to be in the defined template folder. It cannot be in a sub-folder! If anyone know's how to change this please let me know. 

> [!warning] NOTE
> I have highlighted the text that needs to be changed on your end. Note that in order to highlight text in Obsidian I have wrapped the text in 2x=. You do not need to copy the 2x= on your side. You will only see these in Edit mode so make sure you copy the code from Reading mode. 

What you put in your template is largely up to you. But there are a few elements that need to be added. 

<% tp.file.title %>
<% await tp.file.move("==/2. Mechanics/Non-Player Characters/==" + tp.file.title) %>

This line above is what moves the new note to a folder. In this case I am moving it to a folder called 'Non-Player Characters' which is nested in the '/2. Mechanics/' folder. 
The bit on the end adds the notes name to the file path. 

<%*
const hasTitle = !tp.file.title.startsWith("==NewNPC==");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

This section prompts the user to enter the name of the note. Note that it is looking for a note that starts with the name 'NewNPC'. This is defined in the button which we will cover next. 

### The Button
Where you put the button is up to you. Pick a note that makes sense. For me I am considering putting them in my [[Default New Tab Page]]. Another option is to put them in their own note. You can then drag that Button note into a side bar somewhere so you always have quick access to the buttons. 

![[Pasted image 20221115175856.png]]

Creating a button is actually really easy because there is a Wizard!

Open the Command Pallette
![[Pasted image 20221115180015.png]]

Type in 'Button' and select the option called **'Buttons: Button Maker'**
![[Pasted image 20221115180059.png]]

Fill out the Wizard:
- Button Name: Name your button, this is text you will see on the button.
- Button Type: Select Template. Take note of the other options for future use cases. 
- Template: Select Note and type the name of the Template you want to trigger.
- Note Name: Enter a default Note Name. Take note that this is the name that needs to be updated into the Template code above. 
- Split: Would you like the new Note to open in a new pane? Is so, turn this on. 
- Button Block ID: This is basically a unique name for your Button. You can use this to display your button on other pages and use the button more than once. 
- Templater: Turn this on as we are using Templater in this example. 
- Click **Insert Button**.

![[Pasted image 20221115180300.png]]

![[Pasted image 20221115180344.png]]

> [!danger]+ IMPORTANT 
> Take note of the Note Name you used. You will need to go and update your Template with this same name. 

### Working Examples


```button
name New NPC
type note(NewNPC, split) template
action TemplateNPC
```
^button-NewNPCID


```button
name New Location
type note(NewLocation, split) template
action TemplateSettlement
templater true
```
^button-NewLocation