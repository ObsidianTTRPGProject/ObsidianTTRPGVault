You can create a new template by:

### Create A New Template
1. Create a copy of an existing template. Right click > Make a copy. 
2. Modify the Template properties to meet your new Templates requirements. 
3. Adjust the body of the Template to meet your new Templates requirements. 
4. Update the Templater code. 

```
<% await tp.file.move("/3-Mechanics/Guilds and Groups/" + tp.file.title) %>

<%*  
const hasTitle = !tp.file.title.startsWith("NewGroup");  
let title;  
if (!hasTitle) {  
title = await tp.system.prompt("Group Name");  
await tp.file.rename(title);  
} else {  
title = tp.file.title;  
}  
_%>
```

In this example, the following should be changed:

- `/3-Mechanics/Guilds and Groups/` This is the folder path where the Template will save new notes made with the template. 
- `startsWith("NewGroup")` This is saying, find me a note that is called this and when you do, prompt the user to change the name. You therefore need to change `NewGroup` to something unique. 
- `tp.system.prompt("Group Name")` This is the text contained in the message box that prompts the user. Change the `Group Name`with appropriate text so that the user knows what to write in the box. 

### Create a New Button

These templates are triggered with buttons. This is done so that the name of the Template is defined each time which therefore triggers the prompt to the user to change the name and move the new template to the right folder. Thew buttons are currently defined in [[DM Board]] but you can put the button in any note. 

Here is the code for the example used (look at this note in source mode). 

```meta-bind-button
label: New Guild or Group
hidden: false
id: ""
style: primary
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/TemplateGroup.md"
    fileName: NewGroup
```

To create a new button, copy this section of code to a note and make the following changes. 

1. `label: New Guild or Group` This is the label on the button. Change it to whatever you need. 
2. `hidden: false` Leave this as false. 
3. `style: primary` This changes how the buttons look. Try change it to `default`, `primary`, `destructive` or `plain`. 
4. `templateFile: "z_Templates/TemplateGroup.md"` This is telling the button which Template to trigger when the button is pressed. Change this to match the location/name of your new template. 
5. `fileName: NewGroup` This is telling the button what to call your new note. This is important as it MUST MATCH the name used in the Templater code within your note. eg: `!tp.file.title.startsWith("NewGroup")`

That should be it. You will now have a MetaBind button that when pressed, triggers the template with the Templater plugin. It will save the template in the folder defined, rename the note to the set name which will trigger the Templater code to prompt the user to rename the note. 
